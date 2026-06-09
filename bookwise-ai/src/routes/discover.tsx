import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { searchBooks } from "@/lib/api";
import type { Book } from "@/lib/api";

import { BookCard } from "@/components/book-card";
import { SearchBar } from "@/components/search-bar";

export const Route = createFileRoute("/discover")({
  component: Discover,
});

function Discover() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadBooks = async () => {
      if (!query.trim()) {
        setBooks([]);
        return;
      }

      try {
        setLoading(true);

        const results = await searchBooks(query);

        setBooks(results);
      } catch (error) {
        console.error("Search failed", error);
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(loadBooks, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 space-y-8">
      <div>
        <h1 className="font-display text-3xl font-semibold">
          Discover Books
        </h1>

        <p className="text-muted-foreground">
          Search books from the Goodreads dataset.
        </p>
      </div>

      <SearchBar
        value={query}
        onChange={setQuery}
      />

      {loading && (
        <p>Searching...</p>
      )}

      {!loading && books.length === 0 && query && (
        <p>No books found.</p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </div>
  );
}