from sqlalchemy.orm import Session

from app.models.rating import Rating
from app.schemas.rating import RatingCreate


class RatingService:

    @staticmethod
    def create_rating(
        db: Session,
        rating_data: RatingCreate
    ):

        rating = Rating(
            user_id=rating_data.user_id,
            book_id=rating_data.book_id,
            rating=rating_data.rating
        )

        db.add(rating)
        db.commit()
        db.refresh(rating)

        return rating

    @staticmethod
    def get_all_ratings(db: Session):
        return db.query(Rating).all()