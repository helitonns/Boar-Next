import { Button } from "@/components/button";
import { getIssue } from "@/http/get-issue";
import { ArchiveIcon, MoveLeftIcon, ThumbsUpIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const generateMetadata = async ({ params }: IssuePageProps): Promise<Metadata> => {
  const { id } = await params;
  const issue = await getIssue({ id });
  return {
    title: `Issue ${issue.title}`,
  }
}

interface IssuePageProps {
  params: Promise<{ id: string }>;
}

const STATUS_LABELS = {
  backlog: "Backlog",
  todo: "To Do",
  in_progress: "In Progress",
  done: "Done",
} as const;

export default async function IssuePage({ params }: IssuePageProps) {
  const { id } = await params;

  const issue = await getIssue({ id });

  return (
    <main className="max-w-225 mx-auto w-full flex flex-col gap-4 p-6 bg-navy-800 border-[0.5px] border-navy-500 rounded-xl">
      <Link href="/" className="flex items-center gap-2 text-navy-200 hover:text-navy-100">
        <MoveLeftIcon className="size-4" />
        <span className="text-xs">Back to board</span>
      </Link>

      <div className="flex items-center gap-2">
        <span className="bg-navy-700 rounded-lg px-3 py-1.5 flex items-center gap-2 text-xs">
          <ArchiveIcon className="size-3" />
          {STATUS_LABELS[issue.status]}
        </span>

        <Button>
          <ThumbsUpIcon className="size-3" />
          <span className="text-sm">12</span>
        </Button>
      </div>

      <div className="space-y-2 mt-4">
        <h1 className="text-2xl font-semibold">{issue.title}</h1>
        <p className="mt-2 text-navy-100 text-sm leading-relaxed">{issue.description}</p>
      </div>
    </main>
  );
}