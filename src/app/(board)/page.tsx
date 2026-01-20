interface BoardProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function Board({ searchParams } : BoardProps) {
  const { q } = await searchParams;

  return (
    <div>
      Board
    </div>
  );

}