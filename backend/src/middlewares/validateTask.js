const allowedStatuses = ["OPEN", "IN_PROGRESS", "COMPLETED"];

function validateTask(req, res, next) {
  const { title, status, dueDateTime } = req.body;
  const errors = [];

  if (!title || typeof title !== "string" || !title.trim()) {
    errors.push("Title is required and must be a non-empty string.");
  }

  if (!status || !allowedStatuses.includes(status)) {
    errors.push(`Status must be one of: ${allowedStatuses.join(", ")}.`);
  }

  if (!dueDateTime) {
    errors.push("dueDateTime is required.");
  } else {
    const due = new Date(dueDateTime);
    if (Number.isNaN(due.getTime())) {
      errors.push("dueDateTime must be a valid datetime.");
    } else if (due < new Date()) {
      errors.push("dueDateTime must be in the future.");
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
}

module.exports = validateTask;
