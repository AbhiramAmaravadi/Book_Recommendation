from pydantic import BaseModel


class RatingCreate(BaseModel):
    user_id: str
    book_id: str
    rating: int