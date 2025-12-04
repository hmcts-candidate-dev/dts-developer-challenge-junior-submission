const TaskModel = require("../models/TaskModel");

async function createTask(req, res, next) {
  try {
    const { title, description, status, dueDateTime } = req.body;

    const task = await TaskModel.createTask({
      title,
      description,
      status,
      dueDateTime,
    });

    res.status(201).json({ task });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createTask,
};
