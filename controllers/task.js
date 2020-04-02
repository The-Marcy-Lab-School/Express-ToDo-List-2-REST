const Task = require('../models/Task');

const { Pool } = require('pg');

const pool = new Pool();

const getAll = (req, res) => {
  Task.getAll()
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: '500 Internal Server Error' });
    });
};

const createTask = (req, res) => {
  const {
    taskName, taskDescription, dueDate, isComplete,
  } = req.body;
  Task.createTask(taskName, taskDescription, dueDate, isComplete)
    .then(() => Task.getLastTask())
    .then((data) => res.status(201).json(data.rows[0]))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: '500 Internal Server Error' });
    });
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const {
    taskName, taskDescription, dueDate, isComplete,
  } = req.body;
  Task.updateTask(id, taskName, taskDescription, dueDate, isComplete)
    .then(() => res.status(200).json({ message: '200 Successfully updated' }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: '500 Internal Server Error' });
    });
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  Task.deleteTask(id)
    .then(() => res.status(200).json({ message: '200 Successfully Deleted Task' }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: '500 Internal Server Error' });
    });
};

const markComplete = (req, res) => {
  const { id, isComplete } = req.params;
  Task.markComplete(id, isComplete)
    .then(() => Task.getTask(id))
    .then(() => res.status(200).json({ message: '200 Successfully Completed Task' }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: '500 Internal Server Error' });
    });
};

const connect = (req, res) => {
  try {
    const client =  pool.connect();
    const result =  client.query('SELECT * FROM task');
    const results = { results: (result) ? result.rows : null };
    res.render('pages/db', results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send(`Error ${err}`);
  }
};

module.exports = {
  getAll,
  createTask,
  updateTask,
  deleteTask,
  markComplete,
  connect,
};
