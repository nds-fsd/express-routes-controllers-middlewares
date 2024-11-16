const express = require("express");
const tasksController = require("../controllers/tasks");
const taskTitleValidations = require("../middlewares/taskTitle");
const taskCompletedValidations = require("../middlewares/taskCompleted");
const validationFailedMiddleware = require("../middlewares/validationFailed");

const router = express.Router();

router.get("/", tasksController.getTasks);
router.post(
  "/",
  taskTitleValidations,
  validationFailedMiddleware,
  tasksController.addTask,
);
router.put(
  "/:taskId",
  taskTitleValidations,
  taskCompletedValidations,
  validationFailedMiddleware,
  tasksController.updateTask,
);
router.delete("/:taskId", tasksController.deleteTask);

module.exports = router;
