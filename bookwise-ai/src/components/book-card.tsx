import type { Book } from "@/lib/types";
import { RatingStars } from "./rating-stars";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLibrary } from "@/lib/library-store";
import { toast } from "sonner";

interface Props {
  book: Book;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function BookCard({
  book,
  className,
  size = "md",
}: Props) {
  const aspect = "aspect-[2/3]";
  const { addToShelf } = useLibrary();

  return (
    <div
      className={cn(
        "group relative flex flex-col gap-3 rounded-xl p-2 transition-all hover:bg-card/60",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-lg shadow-card",
          aspect,
          "bg-gradient-to-br from-slate-700 to-slate-900"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
          <div className="flex items-center justify-between">
            <BookOpen className="h-4 w-4 opacity-70" />
          </div>

          <div>
            <div className="font-display text-base leading-tight font-semibold line-clamp-3 drop-shadow">
              {book.title}
            </div>

            <div className="text-[11px] opacity-80 mt-1">
              {book.author}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg pointer-events-none" />
      </div>

      <div className="px-1">
        <div className="text-sm font-medium truncate">
          {book.title}
        </div>

        <div className="text-xs text-muted-foreground truncate">
          {book.author}
        </div>

        <div className="flex items-center gap-1.5 mt-1">
          <RatingStars
            value={book.average_rating ?? 0}
            size={12}
          />

          <span className="text-xs text-muted-foreground">
            {(book.average_rating ?? 0).toFixed(1)}
          </span>
        </div>
      </div>

      <Button
        className="w-full mt-2"
        size="sm"
        onClick={(e) => {
          e.stopPropagation();
          addToShelf(book, "wishlist");
          toast.success(`${book.title} added to your library`);
        }}
      >
        Add to Library
      </Button>
    </div>
  );
}