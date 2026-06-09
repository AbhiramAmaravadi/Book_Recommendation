import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Shelf = "reading" | "completed" | "wishlist";


import type { Book } from "@/lib/types";

interface LibraryEntry {
  book: Book;
  shelf: Shelf;
  userRating?: number;
  addedAt: number;
}


interface LibraryContextValue {
  entries: Record<string, LibraryEntry>;
addToShelf: (book: Book, shelf: Shelf) => void;
  remove: (bookId: string) => void;
  rate: (bookId: string, rating: number) => void;
  getShelf: (bookId: string) => Shelf | null;
  getRating: (bookId: string) => number | undefined;
}

const LibraryContext = createContext<LibraryContextValue | null>(null);

const STORAGE_KEY = "bookwise-library-v1";

export function LibraryProvider({ children }: { children: ReactNode }) {
  const [entries, setEntries] = useState<Record<string, LibraryEntry>>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try { setEntries(JSON.parse(raw)); } catch {}
    } else {
      // seed with a few books so dashboard feels alive
      setEntries({});
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (Object.keys(entries).length) localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const addToShelf = (book: Book, shelf: Shelf) =>
  setEntries((e) => ({
    ...e,
    [book.id]: {
      ...(e[book.id] ?? {
        book,
        addedAt: Date.now(),
      }),
      book,
      shelf,
    },
  }));
  const remove = (bookId: string) =>
    setEntries((e) => {
      const next = { ...e };
      delete next[bookId];
      return next;
    });

  const rate = (bookId: string, rating: number) =>
    setEntries((e) => ({
      ...e,
      [bookId]: { ...(e[bookId] ?? { bookId, shelf: "completed", addedAt: Date.now() }), userRating: rating },
    }));

  const getShelf = (bookId: string) => entries[bookId]?.shelf ?? null;
  const getRating = (bookId: string) => entries[bookId]?.userRating;

  return (
    <LibraryContext.Provider value={{ entries, addToShelf, remove, rate, getShelf, getRating }}>
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  const ctx = useContext(LibraryContext);
  if (!ctx) throw new Error("useLibrary must be used inside LibraryProvider");
  return ctx;
}
