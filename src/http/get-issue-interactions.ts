import { IssueInteractionsResponseSchema } from "@/api/routes/schemas/issue-interactions";
import { clientEnv } from "@/env";

interface GetIsssueInteractionsParams {
  issuesIds: string[];
}

export async function getIsssueInteractions({ issuesIds }: GetIsssueInteractionsParams) {
  const url = new URL(`/api/issues/interactions`, clientEnv.NEXT_PUBLIC_API_URL);
  url.searchParams.set("issueIds", issuesIds.join(","));

  const response = await fetch(url, {
    credentials: "include"
  });
  const data = await response.json();

  return IssueInteractionsResponseSchema.parse(data);
}