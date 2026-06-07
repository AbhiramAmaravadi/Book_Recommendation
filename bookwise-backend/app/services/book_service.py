from sqlalchemy.orm import Session

from app.models.book import Book


class BookService:

    @staticmethod
    def get_all_books(
        db: Session
    ):
        return db.query(Book).all()