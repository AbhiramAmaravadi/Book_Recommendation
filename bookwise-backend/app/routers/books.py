from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.models.book import Book
from app.db import get_db
from app.services.book_service import BookService
from app.schemas.book import BookResponse
router = APIRouter()




@router.get("/")
def get_books(
    db: Session = Depends(get_db)
):
    return BookService.get_all_books(db)

@router.get(
    "/search",
    response_model=list[BookResponse]
)
def search_books(
    q: str,
    db: Session = Depends(get_db)
):
    return (
        db.query(Book)
        .filter(Book.title.ilike(f"%{q}%"))
        .limit(20)
        .all()
    )