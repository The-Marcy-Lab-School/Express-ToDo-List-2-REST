const Task = require('../models/Tasks');

const createTask = (req, res) => {
  const { name, dueDate } = req.body;
  Task.createTask(name, dueDate)
    .then(() => Task.getLastCreated())
    .then((data) => res.status(201).json(data.rows))
    .catch(() => res.status(500).json({ error: '500: Internal Server Error' }));
};

const getAllTasks = (req, res) => {
  Task.getAllTasks()
    .then((data) => res.json(data.rows))
    .catch(() => res.status(500).json({ error: '500: Internal Server Error' }));
};

const getTaskById = (req, res) => {
  const { id } = req.params;
  Task.getTaskById(id)
    .then((data) => res.json(data.rows[0]))
    .catch(() => res.status(500).json({ error: '500: Internal Server Error' }));
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { name, dueDate } = req.body;

  Task.updateTask(id, name, dueDate)
    .then(() => res.status(200).json({ message: 'Friend data updated.' }))
    .catch(() => res.status(500).json({ error: '500: Internal Server Error' }));
};

const deleteTask = (req, res) => {
  const { id } = req.params;

  Task.deleteTask(id)
    .then(() => res.status(204).json({ message: 'Friend successfully deleted.' }))
    .catch(() => res.status(500).json({ error: '500: Internal Server Error. Resource could not be deleted.' }));
};


module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
