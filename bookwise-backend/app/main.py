from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text

from app.db import engine
from app.routers.books import router as books_router
from app.routers.recommendations import router as recommendation_router
import app.models

app = FastAPI(
    title="BookWise AI",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
        "http://localhost:8080",
        "https://book-recommendation-1-anse.onrender.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    recommendation_router,
    prefix="/recommendations",
    tags=["Recommendations"]
)

app.include_router(
    books_router,
    prefix="/books",
    tags=["Books"]
)

@app.get("/")
def root():
    return {
        "message": "BookWise AI Backend Running"
    }

@app.get("/db-test")
def db_test():
    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))

    return {
        "database": "connected"
    }