import { Link, useRouterState } from "@tanstack/react-router";
import { BookMarked, Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/discover", label: "Discover" },
  { to: "/recommendations", label: "Recommendations" },
  { to: "/library", label: "My Library" },
] as const;

export function Navbar() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center shadow-elegant">
              <BookMarked className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">
              BookWise <span className="text-gradient">AI</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = l.to === "/" ? path === "/" : path.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                    active ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/60",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden sm:flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setDark((d) => !d)} aria-label="Toggle theme">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button asChild variant="ghost" size="sm">
              
            </Button>
            <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
              
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border/60 py-3 space-y-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 px-1">
              <Button asChild variant="outline" size="sm" className="flex-1">
              
              </Button>
              <Button asChild size="sm" className="flex-1 bg-gradient-primary text-primary-foreground">
              
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
