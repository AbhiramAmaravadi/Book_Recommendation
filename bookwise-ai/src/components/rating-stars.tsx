import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  value: number;
  max?: number;
  size?: number;
  interactive?: boolean;
  onChange?: (v: number) => void;
  className?: string;
}

export function RatingStars({ value, max = 5, size = 16, interactive, onChange, className }: Props) {
  return (
    <div className={cn("inline-flex items-center gap-0.5", className)}>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.round(value);
        return (
          <button
            key={i}
            type="button"
            disabled={!interactive}
            onClick={() => interactive && onChange?.(i + 1)}
            className={cn(
              "transition-transform",
              interactive && "hover:scale-125 cursor-pointer",
              !interactive && "cursor-default",
            )}
            aria-label={`${i + 1} stars`}
          >
            <Star
              style={{ width: size, height: size }}
              className={cn(
                filled ? "fill-warning text-warning" : "text-muted-foreground/40",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
