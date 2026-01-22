import { listIssues } from "@/http/list-issues";
import { Metadata } from "next";
import { BoarContent } from "./board-content";

export const metadata: Metadata = {
  title: "Board"
};
interface BoardProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function Board({ searchParams }: BoardProps) {
  const { q } = await searchParams;

  const issues = await listIssues({ search: q });

  return (
    <div className="max-w-405 w-full mx-auto p-10 flex flex-col gap-8 h-dvh">
      <BoarContent issues={issues} />
    </div>
  );
}
