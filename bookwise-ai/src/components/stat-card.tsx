import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  value: string | number;
  hint?: string;
  icon: LucideIcon;
  accent?: boolean;
}

export function StatCard({ label, value, hint, icon: Icon, accent }: Props) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card",
      accent && "bg-gradient-to-br from-card to-accent/20",
    )}>
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{label}</div>
          <div className="mt-2 font-display text-3xl font-semibold">{value}</div>
          {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
        </div>
        <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary grid place-items-center">
          <Icon className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
