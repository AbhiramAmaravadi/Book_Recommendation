import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { useLibrary } from "@/lib/library-store";
import { getRecommendations } from "@/lib/api";
import type { Recommendation } from "@/lib/recommend";
import { RecommendationCard } from "@/components/recommendation-card";

export const Route = createFileRoute("/recommendations")({
  component: RecommendationsPage,
});

function RecommendationsPage() {
  const { entries } = useLibrary();

  const [recs, setRecs] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecommendations = async () => {
      try {
        const ids = Object.values(entries).map(
          (entry) => entry.book.id
        );

        if (ids.length === 0) {
          setRecs([]);
          setLoading(false);
          return;
        }

        const data = await getRecommendations(ids);

        setRecs(data);
      } catch (error) {
        console.error("Failed to load recommendations", error);
      } finally {
        setLoading(false);
      }
    };

    loadRecommendations();
  }, [entries]);

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl p-8">
        Loading recommendations...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl p-8">
      <h1 className="text-3xl font-bold mb-6">
        Recommended Books
      </h1>

      {recs.length === 0 ? (
        <p>Add some books to your library first.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {recs.map((rec) => (
            <RecommendationCard
              key={rec.id}
              rec={rec}
            />
          ))}
        </div>
      )}
    </div>
  );
}