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
            text = f"""
            {book.title}
            {book.author}
            {book.publisher}
            """

            corpus.append(text)

        vectorizer = TfidfVectorizer(
            stop_words="english"
        )

        tfidf_matrix = vectorizer.fit_transform(corpus)

        similarity_matrix = cosine_similarity(
            tfidf_matrix
        )

        selected_indexes = []

        for i, book in enumerate(books):
            if str(book.id) in book_ids:
                selected_indexes.append(i)

        if not selected_indexes:
            return []

        scores = {}
        counts = {}

        for idx in selected_indexes:

            similarities = similarity_matrix[idx]

            for book_idx, score in enumerate(similarities):

                if book_idx == idx:
                    continue

                scores[book_idx] = (
                    scores.get(book_idx, 0)
                    + float(score)
                )

                counts[book_idx] = (
                    counts.get(book_idx, 0)
                    + 1
                )

        # Average scores so they stay between 0 and 1
        for book_idx in scores:
            scores[book_idx] = (
                scores[book_idx] / counts[book_idx]
            )

        recommendations = []

        for idx, score in sorted(
            scores.items(),
            key=lambda x: x[1],
            reverse=True
        ):

            # Never recommend books already selected
            if str(books[idx].id) in book_ids:
                continue

            recommendations.append(
                {
                    "id": str(books[idx].id),
                    "title": books[idx].title,
                    "author": books[idx].author,
                    "average_rating": books[idx].average_rating,
                    "score": min(round(score, 4), 1.0)
                }
            )

        return recommendations[:10]