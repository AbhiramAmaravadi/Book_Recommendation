import type { Genre } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface Props {
  genres: readonly Genre[] | Genre[];
  active: Genre | "All";
  onChange: (g: Genre | "All") => void;
}

export function GenreFilter({ genres, active, onChange }: Props) {
  const items: (Genre | "All")[] = ["All", ...genres];
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
      {items.map((g) => (
        <button
          key={g}
          onClick={() => onChange(g)}
          className={cn(
            "shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-all",
            active === g
              ? "border-primary bg-primary/15 text-foreground"
              : "border-border bg-card/40 text-muted-foreground hover:text-foreground hover:border-border",
          )}
        >
          {g}
        </button>
      ))}
    </div>
  );
}
