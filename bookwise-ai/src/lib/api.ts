const API_BASE_URL = import.meta.env.VITE_API_URL;
export interface Book {
  id: string;
  title: string;
  author: string;
  average_rating: number;
}

export interface Recommendation {
  id: string;
  title: string;
  author: string;
  average_rating: number;
  score: number;
}

export async function searchBooks(query: string): Promise<Book[]> {
  const response = await fetch(
    `${API_BASE_URL}/books/search?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Failed to search books");
  }

  return response.json();
}

export async function getRecommendations(
  bookIds: string[]
): Promise<Recommendation[]> {
  const response = await fetch(
    `${API_BASE_URL}/recommendations`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        book_ids: bookIds,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to get recommendations");
  }

  return response.json();
}