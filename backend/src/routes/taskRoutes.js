const express = require("express");
const { createTask } = require("../controllers/taskController");
const validateTask = require("../middlewares/validateTask");

const router = express.Router();

router.post("/tasks", validateTask, createTask);

module.exports = router;
