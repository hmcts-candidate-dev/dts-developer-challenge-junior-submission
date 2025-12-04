# HMCTS Task UI (Frontend)

This is a simple React-based user interface for creating caseworker tasks as part of the HMCTS DTS Junior Developer coding challenge.  
It provides a form for submitting task details to the backend API and displays validation errors or a success confirmation.

---

## Features

- Form for creating tasks:
  - `title` (required)
  - `description` (optional)
  - `status` (`OPEN`, `IN_PROGRESS`, `COMPLETED`)
  - `dueDateTime` (ISO 8601)
- Displays backend validation errors
- Shows created task details on success
- Minimal, responsive layout
- Environment-based configuration for API URL

---

## Project Structure

frontend/
├── src/
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│ │
│ └── components/
│ └── TaskForm.jsx
│
├── public/
├── .env.example
├── package.json
└── README.md

---

## Getting Started

### 1. Install dependencies

npm install

### 2. Configure environment variables

Create a .env file based on .env.example
VITE_API_BASE_URL=http://localhost:3000/api

### 3. Ensure the backend is running

The frontend requires the accompanying backend API to be running locally.
Start the backend in a separate terminal:
npm run dev

### 4. Run the Frontend development server

npm run dev

Open the printed local URL (typically)
http://localhost:5173
