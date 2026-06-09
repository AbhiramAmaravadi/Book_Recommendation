import { Link } from "@tanstack/react-router";
import type { Recommendation } from "@/lib/recommend";

interface RecommendationCardProps {
  rec: Recommendation;
}

export function RecommendationCard({
  rec,
}: RecommendationCardProps) {
  const pct = Math.round(rec.score * 100);

  return (
    <Link
      to="/"
      className="group relative flex gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-elegant"
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="font-medium truncate">
              {rec.title}
            </div>

            <div className="text-xs text-muted-foreground truncate">
              {rec.author}
            </div>
          </div>

          <div className="text-right shrink-0">
            <div className="text-base font-display font-semibold text-gradient">
              {pct}%
            </div>

            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Match
            </div>
          </div>
        </div>

        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-gradient-primary"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </Link>
  );
}