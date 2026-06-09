import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, Layers, Star, ArrowRight, Wand2 } from "lucide-react";
import { BOOKS } from "@/lib/mock-data";
import { BookCard } from "@/components/book-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BookWise AI — Discover your next favorite book" },
      { name: "description", content: "AI-powered book recommendations tuned to your taste. 10,000+ books across 50+ genres." },
      { property: "og:title", content: "BookWise AI" },
      { property: "og:description", content: "AI-powered book recommendations tuned to your taste." },
    ],
  }),
  component: Landing,
});

function Landing() {
  const featured = BOOKS.slice(0, 6);
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-32 lg:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground animate-fade-in">
              <Sparkles className="h-3 w-3 text-primary" />
              Powered by intelligent recommendation algorithms
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] animate-fade-in">
              Discover your next favorite book with{" "}
              <span className="text-gradient">AI</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl animate-fade-in">
              Personalized recommendations powered by intelligent recommendation
              algorithms and your reading preferences. BookWise AI learns the way
              you read — and finds the books you'd never find on your own.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-in">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-elegant">
                <Link to="/discover">
                  Get Started <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/discover">Explore Books</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
              {[
                { icon: BookOpen, label: "Books", value: "10,000+" },
                { icon: Layers, label: "Genres", value: "50+" },
                { icon: Wand2, label: "AI recommendations", value: "Personalized" },
                { icon: Star, label: "User ratings", value: "1.2M+" },
              ].map((s) => (
                <div key={s.label} className="glass rounded-xl p-4">
                  <s.icon className="h-4 w-4 text-primary mb-2" />
                  <div className="font-display text-xl font-semibold">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold">Trending this week</h2>
            <p className="text-sm text-muted-foreground mt-1">A small taste of what the engine is seeing.</p>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link to="/discover">All books <ArrowRight className="ml-1 h-3 w-3" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {featured.map((b) => <BookCard key={b.id} book={b} />)}
        </div>
      </section>

      {/* Feature blocks */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Recommendations that read you back",
              body: "A hybrid model blends your ratings, similar readers, and the semantic shape of every book in our catalog.",
              icon: Sparkles,
            },
            {
              title: "Built for serious readers",
              body: "Shelves, reading streaks, and analytics — no social bloat. Just you, your books, and what's next.",
              icon: BookOpen,
            },
            {
              title: "Transparent by design",
              body: "Every recommendation comes with a confidence score and the exact reasons it surfaced.",
              icon: Wand2,
            },
          ].map((f) => (
            <div key={f.title} className="glass rounded-2xl p-6">
              <div className="h-9 w-9 rounded-lg bg-gradient-primary grid place-items-center mb-4">
                <f.icon className="h-4 w-4 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-accent/40 p-10 sm:p-14 text-center shadow-elegant">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative">
           
          </div>
        </div>
      </section>
    </div>
  );
}
