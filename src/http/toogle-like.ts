import { LikeResponseSchema } from "@/api/routes/schemas/issue-likes";
import { clientEnv } from "@/env";

interface ToogleLikeParams {
  issueId: string;
}

export async function toogleLike({ issueId }: ToogleLikeParams) {
  const url = new URL(`/api/issues/${issueId}/like`, clientEnv.NEXT_PUBLIC_API_URL);

  const response = await fetch(url, {
    method: "POST"
  });
  const data = await response.json();

  return LikeResponseSchema.parse(data);
}