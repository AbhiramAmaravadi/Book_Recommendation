from pydantic import BaseModel
from uuid import UUID


class BookResponse(BaseModel):
    id: UUID
    title: str
    author: str | None = None
    publisher: str | None = None
    language: str | None = None
    average_rating: float | None = None
    ratings_count: int | None = None
    num_pages: int | None = None

    class Config:
        from_attributes = True