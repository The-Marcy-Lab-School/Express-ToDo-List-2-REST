const { Pool } = require('pg');
const express = require('express');
const taskController = require('../controllers/todoList');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
const router = express.Router();

router.get('/', (req, res) => {
  res.json('Hello');
});

router.get('/db', async(req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM tasks');
    const results = { 'results': (result) ? result.rows : null };
    res.render('/db', results);
    client.release();
  }
  catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});


router.get('/tasks', taskController.getAllTasks);

router.get('/tasks/:id', taskController.getTaskById);

router.post('/create', taskController.createTask);

router.put('/isComplete/:id', taskController.isCompleted);

router.put('/update/:id', taskController.updateTask);

router.delete('/delete/:id', taskController.deleteTask);

module.exports = router;
