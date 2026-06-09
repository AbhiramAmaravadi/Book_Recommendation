from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sqlalchemy.orm import Session

from app.models.book import Book


class RecommendationService:

    @staticmethod
    def recommend_from_books(
        book_ids: list[str],
        db: Session
    ):

        books = db.query(Book).all()

        if not books:
            return []

        corpus = []

        for book in books:
            corpus.append(
                f"{book.title} {book.author} {book.publisher}"
            )

        vectorizer = TfidfVectorizer(
            stop_words="english"
        )

        tfidf_matrix = vectorizer.fit_transform(corpus)

        selected_indexes = []

        for i, book in enumerate(books):
            if str(book.id) in book_ids:
                selected_indexes.append(i)

        if not selected_indexes:
            return []

        # Only compare selected books against all books
        selected_vectors = tfidf_matrix[selected_indexes]

        similarities = cosine_similarity(
            selected_vectors,
            tfidf_matrix
        )

        scores = {}

        for row in similarities:

            for book_idx, score in enumerate(row):

                if str(books[book_idx].id) in book_ids:
                    continue

                scores[book_idx] = (
                    scores.get(book_idx, 0)
                    + float(score)
                )

        for book_idx in scores:
            scores[book_idx] = (
                scores[book_idx] / len(selected_indexes)
            )

        recommendations = []

        for idx, score in sorted(
            scores.items(),
            key=lambda x: x[1],
            reverse=True
        ):

            recommendations.append(
                {
                    "id": str(books[idx].id),
                    "title": books[idx].title,
                    "author": books[idx].author,
                    "average_rating": books[idx].average_rating,
                    "score": round(score, 4)
                }
            )

        return recommendations[:10]