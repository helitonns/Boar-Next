import type { IssueInteractionsResponseSchema } from "@/api/routes/schemas/issue-interactions";
import { toogleLike } from "@/http/toogle-like";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ThumbsUpIcon } from "lucide-react";
import { ComponentProps } from "react";
import z from "zod";
import { Button } from "./button";

type IssueInteractionResponse = z.infer<typeof IssueInteractionsResponseSchema>;
interface LikeButtonProps extends ComponentProps<"button"> {
  issueId: string;
  initialLikes: number;
  initialLiked?: boolean;
}

export function LikeButton({ issueId, initialLikes, initialLiked = false, ...props }: LikeButtonProps) {
  const queryClint = useQueryClient();

  const { mutate: handleToogleLIke, isPending } = useMutation({
    mutationFn: () => toogleLike({issueId}),
    onMutate: async ()=> {
      const previousData = queryClint.getQueryData<IssueInteractionResponse>(["issue-likes", issueId]);
      queryClint.setQueryData<IssueInteractionResponse>(["issue-likes", issueId], old => {
        if(!old) return undefined;

        return {
          ...old,
          interactions: old.interactions.map(interaction => {
            if (interaction.issueId === issueId){
              return {
                ...interaction,
                isLiked: !interaction.isLiked,
                likesCount: interaction.isLiked ? interaction.likesCount - 1 : interaction.likesCount + 1
              }
            }
            return interaction;
          }) 
        }
      });

      return { previousData }
    },
    onError: async (_err, _params, context)=> {
      if(context?.previousData){
        queryClint.setQueryData<IssueInteractionResponse>(["issue-likes", issueId], context.previousData);
      }
    }
  });

  const liked = initialLiked;

  return (
    <Button
      data-liked={liked}
      className="data-[liked=true]:bg-indigo-600 data-[liked=true]:text-white data-[liked=true]:hover:bg-indigo-500"
      aria-label={liked ? "Unlike" : "Like"}
      disabled={isPending}
      onClick={() => handleToogleLIke()}
      {...props}
    >
      <ThumbsUpIcon className="size-3" />
      <span className="text-sm">{initialLikes}</span>
    </Button>
  );
}