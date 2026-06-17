# User Management System

## Overview

This project is a full-stack User Management System built using React and FastAPI. The application allows users to create an account, securely log in using JWT-based authentication, and access a protected profile page.

The project demonstrates user authentication, password hashing, token-based authorization, API integration, and frontend-backend communication.

---

## Features

* User Registration (Signup)
* User Login
* JWT Authentication
* Protected Profile Route
* Password Hashing using bcrypt
* Logout Functionality
* React Frontend
* FastAPI Backend
* SQLite Database

---

## Technology Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS

### Backend

* FastAPI
* SQLAlchemy
* SQLite
* Passlib (bcrypt)
* Python-Jose (JWT)

---

## Project Structure

UserManagementSystem/

├── backend/

│   ├── main.py

│   ├── models.py

│   ├── schemas.py

│   ├── auth.py

│   ├── jwt_handler.py

│   ├── database.py

│   └── users.db

│

├── frontend/

│   ├── src/

│   └── package.json

│

└── README.md

---

## Setup Instructions

### Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Activate virtual environment:

```bash
venv\Scripts\activate
```

Run the FastAPI server:

```bash
uvicorn main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

Swagger Documentation:

```text
http://127.0.0.1:8000/docs
```

### Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the React application:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## Assumptions

* SQLite was used for local development and evaluation.
* Each email address must be unique.
* Passwords are stored in hashed form and never saved as plain text.
* JWT tokens are used for maintaining authenticated sessions.

---

## AI Tools Used

I used AI tools including ChatGPT and Claude during development to assist with project planning, FastAPI authentication setup, JWT implementation, React frontend development, debugging, and API integration. These tools helped me understand authentication workflows, structure the application, resolve errors, and implement features more efficiently while allowing me to learn the underlying concepts.

One of the primary challenges encountered during development was integrating JWT-based authentication between the React frontend and FastAPI backend. Additional challenges included configuring OAuth2 form-based login requests, handling protected routes, resolving CORS issues, and debugging dependency-related errors. AI assistance helped identify the root causes of these issues, suggest potential solutions, and accelerate the debugging process while enabling me to implement and understand the final solution.
