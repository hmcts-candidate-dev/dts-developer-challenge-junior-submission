const pool = require("../config/db");

async function createTask({ title, description, status, dueDateTime }) {
  const query = `
    INSERT INTO tasks (title, description, status, due_date_time)
    VALUES ($1, $2, $3, $4)
    RETURNING
      id,
      title,
      description,
      status,
      due_date_time AS "dueDateTime",
      created_at AS "createdAt"
  `;

  const values = [title, description || null, status, dueDateTime];

  const result = await pool.query(query, values);
  return result.rows[0];
}

module.exports = {
  createTask,
};
