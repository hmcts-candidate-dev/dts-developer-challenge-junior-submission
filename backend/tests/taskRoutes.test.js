const request = require("supertest");
const app = require("../src/app");
const pool = require("../src/config/db");

describe("POST /api/tasks", () => {
  it("creates a task when given valid data", async () => {
    const futureDate = new Date(Date.now() + 60 * 60 * 1000).toISOString();

    const response = await request(app).post("/api/tasks").send({
      title: "Prepare evidence bundle",
      description: "For case 12345",
      status: "OPEN",
      dueDateTime: futureDate,
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("task");
    expect(response.body.task).toHaveProperty("id");
    expect(response.body.task.title).toBe("Prepare evidence bundle");
    expect(response.body.task.status).toBe("OPEN");
  });

  it("returns validation errors for invalid payload", async () => {
    const response = await request(app).post("/api/tasks").send({
      title: "",
      status: "NOT_A_REAL_STATUS",
      dueDateTime: "not-a-date",
    });

    expect(response.status).toBe(400);
    expect(Array.isArray(response.body.errors)).toBe(true);
    expect(response.body.errors.length).toBeGreaterThan(0);
  });
});

afterAll(async () => {
  await pool.end();
});
