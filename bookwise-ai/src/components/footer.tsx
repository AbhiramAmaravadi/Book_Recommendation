import { Link } from "@tanstack/react-router";
import { BookMarked } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-primary grid place-items-center">
            <BookMarked className="h-3 w-3 text-primary-foreground" />
          </div>
          <span className="text-sm font-medium">BookWise AI</span>
          <span className="text-xs text-muted-foreground hidden sm:inline">· Recommendations that read you back</span>
        </Link>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} BookWise AI — Demo product</div>
      </div>
    </footer>
  );
}
