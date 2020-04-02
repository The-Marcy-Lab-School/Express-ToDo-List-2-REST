const { Pool } = require('pg');
const Task = require('../models/Tasks');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

const createTask = async(req, res) => {
  try {
    const { name, dueDate } = req.body;
    const client = await pool.connect();
    const result = await Task.createTask(name, dueDate);
    const results = { results: (result) ? result.rows : null };
    // .then(() => Task.getLastCreated())
    // .then((data) => res.status(201).json(data.rows))
    // .catch(() => res.status(500).json({ error: '500: Internal Server Error' }));
    res.send(results);
    client.release();
  }
  catch (err) {
    res.send(err);
  }
};

const getAllTasks = async(req, res) => {
  try {
    const client = await pool.connect();
    const result = await Task.getAllTasks();
    const results = { results: (result) ? result.rows : null };
    // .then((data) => res.json(data.rows))
    //   .catch(() => res.status(500).json({ error: '500: Internal Server Error' }));
    res.send(results);
    client.release();
  }
  catch (err) {
    res.send(err);
  }
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
    .catch(() => res.status(500).json({ error: '500: Internal Server Error' }));
};

const isCompleted = (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  Task.isCompleted(id, completed)
    .then((data) => res.json(data.rows[0]))
    .catch(() => res.status(500).json({ error: '500: Internal Server Error' }));
};


module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
  isCompleted,
};
