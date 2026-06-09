import { createFileRoute } from "@tanstack/react-router";
import { useLibrary } from "@/lib/library-store";
import { BookCard } from "@/components/book-card";

export const Route = createFileRoute("/library")({
  component: LibraryPage,
});

function LibraryPage() {
  const { entries } = useLibrary();

  const books = Object.values(entries);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">
        My Library
      </h1>

      {books.length === 0 ? (
        <div className="text-muted-foreground">
          No books added yet.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {books.map((entry) => (
            <BookCard
              key={entry.book.id}
              book={entry.book}
            />
          ))}
        </div>
      )}
    </div>
  );
}