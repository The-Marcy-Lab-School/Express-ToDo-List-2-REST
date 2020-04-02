const pool = require('../db')

async function addTask(req, res) {
  try {
    const {name, description} = req.body
    const dateAdded = new Date()
    const queryText = 'INSERT INTO task (name, description, date_added) VALUES ($1, $2, $3);'  
    const client = await pool.connect();
    const result = await client.query(queryText, [name, description, dateAdded]);
    const results = { 'results': (result) ? result.rows : null };
    res.send(results);
    client.release();
  }
  catch (err) {
    console.error(err);
    res.send(err);
  }
}

async function deleteTask(req, res) {
  try {
    const {id} = req.params
    const queryText = 'DELETE FROM task WHERE task_id = $1'  
    const client = await pool.connect();
    const result = await client.query(id, queryText);
    const results = { 'results': (result) ? result.rows : null };
    res.send(results);
    res.status(201).json({ message: 'Task deleted.' });
    client.release();
  }
  catch (err) {
    console.error(err);
    res.send(err);
    res.status(500).json({ error: '500: Internal Server Error. Resource not deleted.' });
  }
}

async function updateTask(req, res) {
  try {
    const {id} = req.params
    const {name, description} = req.body
    const dateAdded = new Date()
    const queryText = 'UPDATE task SET (name, description, date_added) = ($2, $3, $4) WHERE task_id = $1;'
    const client = await pool.connect();
    const result = await client.query(queryText, [id, name, description, dateAdded]);
    const results = { 'results': (result) ? result.rows : null };
    res.send(results);
    res.status(201).json({ message: 'Task deleted.' });
    client.release();
  }
  catch (err) {
    console.error(err);
    res.send(err);
    res.status(500).json({ error: '500: Internal Server Error. Resource not deleted.' });
  }
}

async function completeTask(req, res) {
  try {
    const {id} = req.params
    const dateCompleted = new Date()
    const queryText = `UPDATE task SET (is_complete, date_completed) = ($2, $3) WHERE task_id = $1;`
    const client = await pool.connect();
    const result = await client.query(queryText, [id, true, dateCompleted]);
    const results = { 'results': (result) ? result.rows : null };
    res.send(results);
    res.status(201).json({ message: 'Task completed.' });
    client.release();
  }
  catch (err) {
    console.error(err);
    res.send(err);
    res.status(500).json({ error: '500: Internal Server Error. Resource not completed.' });
  }
}
        

module.exports = {
    addTask,
    deleteTask,
    updateTask,
    completeTask,
}