const Todos = require('../models/Todos');

const getAll = (req, res) => {
  Todos.getAll()
    .then((queryRes) => queryRes.rows)
    .then((todos) => {
      res.status(200).json(todos);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: '500 Internal Server Error. Failed to load resource.' });
    });
};

const getTodo = (req, res) => {
  const { taskId } = req.params;
  Todos.find(taskId)
    .then((queryRes) => queryRes.rows)
    .then((todos) => {
      if (todos[0]) {
        res.status(200).json(todos[0]);
      } else {
        throw Error();
      }
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: '500 Internal Server Error. Failed to load resource.' });
    });
};

const addTodo = (req, res) => {
  const {
    task, description, isComplete, dueDate,
  } = req.body;
  Todos.create(task, description, isComplete, dueDate)
    .then(() => Todos.getLast())
    .then((data) => {
      res.status(200).json(data.rows[0]);
    })
    .catch(() => {
      res.status(500).json({
        error: '500 Internal Server Error. Failed to create resource.',
      });
    });
};

const removeTodo = (req, res) => {
  const { taskId } = req.params;
  Todos.delete(taskId)
    .then(() => res.redirect('/todos'))
    .catch(() => {
      res.status(500).json({
        error: '500 Internal Server Error. Failed to delete resource.',
      });
    });
};

const toggleIsComplete = (req, res) => {
  const { taskId } = req.params;
  Todos.toggleIsComplete(taskId)
    .then(() => res.redirect(`/todos/${taskId}`))
    .catch(() => {
      res.status(500).json({
        error: '500 Internal Server Error. Failed to update resource.',
      });
    });
};

module.exports = {
  getAll,
  getTodo,
  addTodo,
  removeTodo,
  toggleIsComplete,
};
