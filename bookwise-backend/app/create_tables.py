from app.db import Base, engine
from app.models.book import Book

print("Creating tables...")
Base.metadata.create_all(bind=engine)
print("Done.")