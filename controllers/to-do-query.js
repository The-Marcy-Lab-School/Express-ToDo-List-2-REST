const db = require('../db');

const greetUser = (req, res) => {
    res.send('Hello User')
}

const getAllUncompletedTasks = (req, res) => {
    db.query('SELECT * FROM task WHERE is_complete = false;')
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: '500: Internal Server Error' });
    });
}

const getAllCompletedTasks = (req, res) => {
    db.query('SELECT * FROM task WHERE is_complete = true;')
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: '500: Internal Server Error' });
    });
}

const getAllTasks = (req, res) => {
    db.query('SELECT * FROM task;')
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: '500: Internal Server Error' });
    });
}




module.exports = {
    greetUser,
    getAllTasks,
    getAllCompletedTasks,
    getAllUncompletedTasks,
}