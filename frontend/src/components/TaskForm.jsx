import React, { useState } from "react";

const allowedStatuses = ["OPEN", "IN_PROGRESS", "COMPLETED"];
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function TaskForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "OPEN",
    dueDateTime: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState([]);
  const [createdTask, setCreatedTask] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setErrors([]);
    setCreatedTask(null);

    try {
      const payload = {
        ...form,
      };

      const response = await fetch(`${API_BASE_URL}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors(data.errors || ["An unexpected error occurred."]);
      } else {
        setCreatedTask(data.task);
      }
    } catch (error) {
      console.error(error);
      setErrors(["Network error. Please try again."]);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: "1rem",
        }}
      >
        <div>
          <label
            htmlFor="title"
            style={{
              display: "block",
              fontWeight: 600,
              marginBottom: "0.25rem",
            }}
          >
            Title <span style={{ color: "#dc2626" }}>*</span>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.5rem 0.75rem",
              borderRadius: "0.375rem",
              border: "1px solid #d1d5db",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="description"
            style={{
              display: "block",
              fontWeight: 600,
              marginBottom: "0.25rem",
            }}
          >
            Description (optional)
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            value={form.description}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.5rem 0.75rem",
              borderRadius: "0.375rem",
              border: "1px solid #d1d5db",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="status"
            style={{
              display: "block",
              fontWeight: 600,
              marginBottom: "0.25rem",
            }}
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={form.status}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.5rem 0.75rem",
              borderRadius: "0.375rem",
              border: "1px solid #d1d5db",
            }}
          >
            {allowedStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="dueDateTime"
            style={{
              display: "block",
              fontWeight: 600,
              marginBottom: "0.25rem",
            }}
          >
            Due date/time
          </label>
          <input
            id="dueDateTime"
            name="dueDateTime"
            type="datetime-local"
            value={form.dueDateTime}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.5rem 0.75rem",
              borderRadius: "0.375rem",
              border: "1px solid #d1d5db",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          style={{
            padding: "0.6rem 1.25rem",
            borderRadius: "9999px",
            border: "none",
            backgroundColor: submitting ? "#9ca3af" : "#2563eb",
            color: "white",
            fontWeight: 600,
            cursor: submitting ? "not-allowed" : "pointer",
          }}
        >
          {submitting ? "Creating..." : "Create Task"}
        </button>
      </form>

      {errors.length > 0 && (
        <div
          style={{
            marginTop: "1.25rem",
            padding: "0.75rem 1rem",
            borderRadius: "0.375rem",
            backgroundColor: "#fef2f2",
            color: "#b91c1c",
          }}
        >
          <strong style={{ display: "block", marginBottom: "0.25rem" }}>
            There were some problems:
          </strong>
          <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
            {errors.map((err, index) => (
              <li key={index}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      {createdTask && (
        <div
          style={{
            marginTop: "1.25rem",
            padding: "0.75rem 1rem",
            borderRadius: "0.375rem",
            border: "1px solid #d1d5db",
            backgroundColor: "#f9fafb",
            color: "#111827",
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "0.5rem" }}>
            Task created successfully
          </h2>
          <p style={{ margin: "0.25rem 0" }}>
            <strong>Title:</strong> {createdTask.title}
          </p>
          <p style={{ margin: "0.25rem 0" }}>
            <strong>Status:</strong> {createdTask.status}
          </p>
          <p style={{ margin: "0.25rem 0" }}>
            <strong>Due:</strong>{" "}
            {new Date(createdTask.dueDateTime).toLocaleString()}
          </p>
          {createdTask.description && (
            <p style={{ margin: "0.25rem 0" }}>
              <strong>Description:</strong> {createdTask.description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default TaskForm;
