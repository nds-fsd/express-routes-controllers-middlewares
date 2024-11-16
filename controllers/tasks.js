const { tasks } = require("../data");

const getTasks = (req, res) => {
  res.json(tasks);
};

// Al inicializar la aplicación, buscamos y guardamos el ID más alto de entre las tasks
let id = Math.max(...tasks.map((tarea) => tarea.id));

const addTask = (req, res) => {
  id++;
  const newTask = {
    id,
    title: req.body.title,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const idToFind = Number(req.params.taskId);
  const existingTask = tasks.find((task) => task.id === idToFind);

  if (!existingTask) {
    return res.status(404).json({ error: "Task not found" });
  }

  const updatedTask = {
    id: existingTask.id,
    title: req.body.title || existingTask.title,
    completed: req.body.completed || existingTask.completed,
  };

  // con findIndex localizamos en qué posición estaba la tarea original
  // y con splice la borramos e insertamos su versión actualizada
  const existingTaskIndex = tasks.findIndex((task) => task.id === idToFind);
  tasks.splice(existingTaskIndex, 1, updatedTask);

  res.json(updatedTask);
};

const deleteTask = (req, res) => {
  const idToDelete = Number(req.params.taskId);
  const existingTask = tasks.find((task) => task.id === idToDelete);

  if (!existingTask) {
    return res.status(404).json({ error: "Task not found" });
  }

  // con findIndex localizamos en qué posición estaba la tarea original
  // y con splice la borramos e insertamos su versión actualizada
  const existingTaskIndex = tasks.findIndex((task) => task.id === idToDelete);
  tasks.splice(existingTaskIndex, 1);

  res.json({ status: "success" });
};

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
};
