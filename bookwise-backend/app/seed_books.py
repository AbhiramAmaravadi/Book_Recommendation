import pandas as pd

from app.db import SessionLocal
from app.models.book import Book
from app.core.config import settings

print(settings.DATABASE_URL)
db = SessionLocal()

df = pd.read_csv(
    "data/books.csv",
    encoding="utf-8",
    on_bad_lines="skip",
    low_memory=False
)


df.columns = df.columns.str.strip()


for _, row in df.iterrows():

    book = Book(
        title=str(row["title"]),
        author=str(row["authors"]),
        publisher=str(row["publisher"]),
        language=str(row["language_code"]),
        average_rating=float(row["average_rating"]),
        ratings_count=int(row["ratings_count"]),
        num_pages=int(row["num_pages"])
    )

    db.add(book)

db.commit()

print(f"{len(df)} books imported successfully")