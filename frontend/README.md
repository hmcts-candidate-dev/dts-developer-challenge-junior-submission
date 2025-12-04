# HMCTS Task UI — Task Creation Frontend

The **HMCTS Task UI** is a lightweight React frontend built to complement the HMCTS Task API.  
It provides caseworkers with a simple, clear, and accessible interface for creating new tasks.

This application submits task data to the backend (`hmcts-task-api`), validates the user's input via backend responses, and displays a confirmation panel showing the successfully created task.

The UI is designed to be minimal, responsive, and user-friendly, with a centered form layout and clear visual feedback.

---

## ✨ Features

- **Task creation form** with:
  - Title (required)
  - Description (optional)
  - Status dropdown (`OPEN`, `IN_PROGRESS`, `COMPLETED`)
  - Due Date/Time (required, uses native datetime picker)
- **Inline form validation** from backend responses
- **Success panel** showing created task details
- **Error panel** showing list of validation issues
- **Responsive layout**, centered card UI with predictable spacing
- **Environment-based configuration** for backend API URL

---

## 🧱 Tech Stack

- **React** (via Vite)
- **JavaScript / JSX**
- **Fetch API** for backend communication
- **Vite environment variables** (`VITE_` prefix)
- **CSS (lightweight custom styles)**

---

## 📁 Project Structure

hmcts-task-ui/
│
├── src/
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│ │
│ └── components/
│ └── TaskForm.jsx
│
├── public/
├── .env
├── .gitignore
├── package.json
└── README.md

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Backend API (`hmcts-task-api`) running locally on port 3000

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Cosmas-ogo/hmcts-task-ui.git
cd hmcts-task-ui


## 2 Install Dependencies

npm install


## 3 Create .env and add

VITE_API_BASE_URL=http://localhost:3000/api


## 4 Start the Frontend

npm run dev
Vite will display a local development URL, typically:
http://localhost:5173
Open it in your browser.
```
