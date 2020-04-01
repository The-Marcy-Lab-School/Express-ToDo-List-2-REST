const Todos = require('../models/Todos');

const getAll = async (req, res) => {
  try {
    const queryRes = await Todos.getAll();
    const todos = await queryRes.rows;
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: '500 Internal Server Error.' });
  }
};

const getTodo = async (req, res) => {};

const addTodo = async (req, res) => {};

const removeTodo = async (req, res) => {};

const editTodo = async (req, res) => {};

module.exports = {
  getAll,
  getTodo,
  addTodo,
  removeTodo,
  editTodo,
};
