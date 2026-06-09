import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen } from "lucide-react";

import { useLibrary } from "@/lib/library-store";
import { Button } from "@/components/ui/button";
import { RatingStars } from "@/components/rating-stars";

export const Route = createFileRoute("/discover/$id")({
  component: BookDetail,
});

function BookDetail() {
  const { entries, addToShelf } = useLibrary();

  const book = Object.values(entries)
    .map((e) => e.book)
    .find((b) => b.id === Route.useParams().id);

  if (!book) {
    return (
      <div className="mx-auto max-w-4xl p-8">
        <h1 className="text-2xl font-bold">Book not found</h1>
        <Link to="/discover">
          <Button className="mt-4">Back to Discover</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Link to="/discover">
        <Button variant="outline" className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      </Link>

      <div className="grid md:grid-cols-[250px_1fr] gap-8">
        <div className="aspect-[2/3] rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
          <BookOpen className="h-16 w-16 text-white opacity-70" />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-2">
            {book.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-4">
            {book.author}
          </p>

          <div className="flex items-center gap-2 mb-4">
            <RatingStars
              value={book.average_rating ?? 0}
              size={18}
            />

            <span>
              {(book.average_rating ?? 0).toFixed(1)}
            </span>
          </div>

          <div className="space-y-2 mb-6">
            <p>
              <strong>Publisher:</strong>{" "}
              {book.publisher || "Unknown"}
            </p>

            <p>
              <strong>Language:</strong>{" "}
              {book.language || "Unknown"}
            </p>

            <p>
              <strong>Pages:</strong>{" "}
              {book.num_pages || "N/A"}
            </p>

            <p>
              <strong>Ratings:</strong>{" "}
              {book.ratings_count || 0}
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={() =>
                addToShelf(book, "reading")
              }
            >
              Currently Reading
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                addToShelf(book, "completed")
              }
            >
              Mark Read
            </Button>

            <Button
              variant="secondary"
              onClick={() =>
                addToShelf(book, "wishlist")
              }
            >
              Add to Library
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}