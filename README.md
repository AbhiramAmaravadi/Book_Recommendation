#  BookWise - Book Recommendation System

BookWise is a full-stack book recommendation platform that allows users to browse books, rate them, and receive personalized recommendations based on their preferences.

## Features

* Browse a collection of books
* Search books by title or author
* Rate books
* Personalized book recommendations
* REST API built with FastAPI
* React frontend for an interactive user experience
* CSV-based book dataset integration

## Tech Stack

### Frontend

* React
* JavaScript
* CSS

### Backend

* FastAPI
* Python
* SQLAlchemy
* Pydantic

### Database

* SQLite

##  Project Structure

```text
Book_Recommendation/
│
├── bookwise-ai/                # Frontend
│
├── bookwise-backend/
│   ├── app/
│   │   ├── models/
│   │   ├── routers/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── main.py
│   │
│   ├── data/
│   │   └── books.csv
│   │
│   └── requirements.txt
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/AbhiramAmaravadi/Book_Recommendation.git
cd Book_Recommendation
```

### Backend Setup

```bash
cd bookwise-backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs at:

```text
http://localhost:8000
```

API Documentation:

```text
http://localhost:8000/docs
```

### Frontend Setup

```bash
cd bookwise-ai

npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

##  Recommendation Workflow

1. User browses books
2. User rates books
3. Ratings are stored and processed
4. Recommendation engine generates personalized suggestions
5. Recommended books are displayed on the frontend

##  Future Improvements

* User authentication
* Collaborative filtering
* Content-based recommendation engine
* Book reviews and comments
* Favorites and reading lists
* Deployment on AWS/Vercel/Render

## Author

**Abhiram Amaravadi**

GitHub: https://github.com/AbhiramAmaravadi
