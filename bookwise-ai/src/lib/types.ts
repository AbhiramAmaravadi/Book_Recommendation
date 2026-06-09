export interface Book {
  id: string;
  title: string;
  author?: string;
  average_rating?: number;
  publisher?: string;
  language?: string;
  ratings_count?: number;
  num_pages?: number;
}