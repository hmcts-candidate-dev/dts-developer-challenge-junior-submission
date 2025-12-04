import React from "react";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "720px",
        padding: "1.5rem",
        fontFamily: "inherit",
        borderRadius: "8px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
        backgroundColor: "white",
      }}
    >
      <header style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
          HMCTS Task Creator
        </h1>
        <p style={{ color: "#4b5563" }}>
          Create a new caseworker task by entering the details below. On
          success, you’ll see a confirmation and the created task.
        </p>
      </header>

      <TaskForm />
    </div>
  );
}

export default App;
