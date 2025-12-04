# HMCTS Task API (Backend)

This service provides a simple API for creating caseworker tasks as part of the HMCTS DTS Junior Developer coding challenge.  
It exposes a single POST endpoint for task creation, validates input, stores data in PostgreSQL, and returns the created task.

---

## Features

- Create a task with:
  - `title` (required)
  - `description` (optional)
  - `status` (`OPEN`, `IN_PROGRESS`, `COMPLETED`)
  - `dueDateTime` (ISO 8601, must be a future datetime)
- Input validation with consistent error messages
- PostgreSQL persistence using `pg`
- Automated tests (Jest + SuperTest)
- MVC-inspired structure for clarity and maintainability

---

## Project Structure

backend/
├── db/
│ ├── setup.sql # Creates dev & test databases
│ └── schema.sql # Defines tasks table
│
├── src/
│ ├── app.js # Express app configuration
│ ├── server.js # Server entry point
│ │
│ ├── config/
│ │ └── db.js # PostgreSQL connection (pg Pool)
│ │
│ ├── controllers/
│ │ └── taskController.js
│ │
│ ├── models/
│ │ └── TaskModel.js # Database operations
│ │
│ ├── routes/
│ │ └── taskRoutes.js # API routes
│ │
│ └── middlewares/
│ ├── validateTask.js
│ └── errorHandler.js
│
├── tests/
│ └── taskRoutes.test.js # Jest + SuperTest tests
│
├── .env.example # Example environment file
└── package.json

---

## Getting Started

### 1. Install dependencies

```bash
npm install


### 2. Configure environment variables
Create a .env file based on .env.example

PORT=3000
DATABASE_URL=postgres:///hmcts_tasks
TEST_DATABASE_URL=postgres:///hmcts_tasks_test
NODE_ENV=development


### 3. Set up the database

Create development and test databases
npm run setup-dbs

Apply the schema
npm run build-schema


### 4. Run the server
npm run dev

Health check
GET http://localhost:3000/health

Expected
{ "status": "ok" }

Running Tests
npm test

Tests cover
Successful task creation (201)
Validation errors (400)
Error handling flows



### 5. API Documentation
POST /api/tasks

Create a new caseworker task.
Request Body
{
  "title": "Prepare evidence bundle",
  "description": "For case 12345",
  "status": "OPEN",
  "dueDateTime": "2026-01-01T10:00:00.000Z"
}

Successful Response — 201 Created
{
  "task": {
    "id": 1,
    "title": "Prepare evidence bundle",
    "description": "For case 12345",
    "status": "OPEN",
    "dueDateTime": "2026-01-01T10:00:00.000Z",
    "createdAt": "2025-11-25T12:34:56.000Z"
  }
}

Validation Error — 400 Bad Request
{
  "errors": [
    "title is required",
    "dueDateTime must be a valid future datetime"
  ]
}

Server Error — 500 Internal Server Error
{ "error": "Internal Server Error" }
```
