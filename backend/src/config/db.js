const { Pool } = require("pg");
const dotenv = require("dotenv");

if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: ".env.test" });
} else {
  dotenv.config();
}

const connectionString =
  process.env.DATABASE_URL ||
  (process.env.NODE_ENV === "test"
    ? "postgres:///hmcts_tasks_test"
    : "postgres:///hmcts_tasks");

const pool = new Pool({ connectionString });

pool.on("error", (err) => {
  console.error("Unexpected error on idle Postgres client", err);
  process.exit(1);
});

module.exports = pool;
