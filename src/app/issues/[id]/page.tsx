import { getIssue } from "@/http/get-issue";
import { Metadata } from "next";

export const generateMetadata = async ({params} : IssuePageProps): Promise<Metadata> => {
  const { id } = await params;
  const issue = await getIssue({ id });
  return {
    title: `Issue ${issue.title}`,
  }
}

interface IssuePageProps {
  params: Promise<{ id: string }>;
}

export default async function IssuePage({ params} : IssuePageProps) {
  const { id } = await params;

  const issue = await getIssue({ id });

  return (
    <div>Issue Page</div>
  );
}