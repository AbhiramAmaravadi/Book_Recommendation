import { createFileRoute } from "@tanstack/react-router";
import { useLibrary } from "@/lib/library-store";
import { BookCard } from "@/components/book-card";

export const Route = createFileRoute("/library")({
  component: LibraryPage,
});

function LibraryPage() {
  const { entries, remove } = useLibrary();

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
            <div
              key={entry.book.id}
              className="relative"
            >
              <button
                onClick={() => remove(entry.book.id)}
                className="absolute top-2 right-2 z-10 bg-red-500 text-white px-2 py-1 rounded text-xs"
              >
                Remove
              </button>

              <BookCard
                book={entry.book}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}