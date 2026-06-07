from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db import get_db
from app.schemas.recommendation import RecommendationRequest
from app.services.recommendation_service import RecommendationService

router = APIRouter()


@router.post("/")
def get_recommendations(
    request: RecommendationRequest,
    db: Session = Depends(get_db)
):
    return RecommendationService.recommend_from_books(
        request.book_ids,
        db
    )