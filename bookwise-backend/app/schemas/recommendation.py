from pydantic import BaseModel
from typing import List


class RecommendationRequest(BaseModel):
    book_ids: List[str]