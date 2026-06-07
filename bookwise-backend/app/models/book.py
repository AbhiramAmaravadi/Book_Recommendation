from sqlalchemy import Column, String, Float, Integer
from sqlalchemy.dialects.postgresql import UUID
import uuid

from app.db import Base


class Book(Base):
    __tablename__ = "books"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

    title = Column(String, nullable=False)

    author = Column(String)

    publisher = Column(String)

    language = Column(String)

    average_rating = Column(Float)

    ratings_count = Column(Integer)

    num_pages = Column(Integer)