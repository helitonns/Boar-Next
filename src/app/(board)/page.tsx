import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Section } from "@/components/section";
import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Board"
};
interface BoardProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function Board({ searchParams } : BoardProps) {
  const { q } = await searchParams;

  return (
      <div className="max-w-405 w-full mx-auto p-10 flex flex-col gap-8 h-dvh">
        <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">
          <Section.Root>
            <Section.Header>
              <Section.Title>
                <ArchiveIcon className="size-4" />
                Backlog
              </Section.Title>
              <Section.IssueCount>32</Section.IssueCount>
            </Section.Header>
  
            <Section.Content>
              <Card.Root href="/">
                <Card.Header>
                  <Card.Number>ECO-1234</Card.Number>
                  <Card.Title>Design new landing page</Card.Title>
                </Card.Header>
                <Card.Footer>
                  <Button>
                    <ThumbsUpIcon className="size-3" />
                    <span className="text-sm">12</span>
                  </Button>
                  <Button>
                    <MessageCircleIcon className="size-3" />
                    <span className="text-sm">6</span>
                  </Button>
                </Card.Footer>
              </Card.Root>
            </Section.Content>
          </Section.Root>
        </main>
      </div>
    );
  }
  