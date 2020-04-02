const Task = require('../models/Task');

const createTask = (req, res) => {
  const {
    taskName,
    taskDescription,
    dateCreated,
    dueDate,
    isComplete,
  } = req.body;

  Task.createTask(taskName, taskDescription, dateCreated, dueDate, isComplete)
    .then(() => Task.getLastCreated())
    .then((data) => res.status(201).json(data.rows))
    .catch(() => res.status(500).json({
      error: '500: Internal Server Error',
    }));
};

const getAllTasks = (req, res) => {
  Task.getAllTasks()
    .then((data) => res.json(data.rows))
    .catch(() => res.status(500).json({
      error: '500: Internal Server Error',
    }));
};

const getTaskById = (req, res) => {
  const { id } = req.params;
  Task.getTaskById(id)
    .then((data) => res.json(data.rows[0]))
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: '500 Internal Server Error',
      });
    });
};

const updateTask = (req, res) => {
  const { id } = req.params;
  Task.updateTask(id)
    .then((data) => {
      console.log(data);
      res.status(200).json({
        message: 'Task Updated.',
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: '500: Internal Server Error. Resource not Updated.',
      });
    });
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  Task.deleteTask(id)
    .then((data) => {
      console.log(data);
      res.status(204).json({ message: 'Successfully deleted Task.' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: '500: Internal Server Error. Resource not deleted.',
      });
    });
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
