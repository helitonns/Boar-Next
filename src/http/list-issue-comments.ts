import { CommentsListResponseSchema } from "@/api/routes/list-issue-comments";
import { clientEnv } from "@/env";

interface ListIsssueComments {
  issueId?: string;
}

export async function listIsssueComments({ issueId }: ListIsssueComments = {}) {
  const url = new URL(`/api/issues/${issueId}/comments`, clientEnv.NEXT_PUBLIC_API_URL);
  
    const response = await fetch(url);
    const data = await response.json();
  
  return CommentsListResponseSchema.parse(data);
}