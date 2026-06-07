from sqlalchemy import Column, String, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
import uuid

from app.db import Base


class LibraryEntry(Base):
    __tablename__ = "library_entries"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    book_id = Column(UUID(as_uuid=True), ForeignKey("books.id"))

    status = Column(String)

    user = relationship("User", back_populates="library_entries")
    book = relationship("Book", back_populates="library_entries")