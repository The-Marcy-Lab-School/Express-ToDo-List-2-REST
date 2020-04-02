const pool = require('../db')

const greetUser = (req, res) => {
    res.send('Hello User')
}

async function getAllUncompletedTasks(req, res) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM task WHERE is_complete = false;');
    const results = { 'results': (result) ? result.rows : null };
    res.send(results);
    client.release();
  }
  catch (err) {
    console.error(err);
    res.send(err);
  }
}

async function getAllCompletedTasks(req, res) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM task WHERE is_complete = true;');
    const results = { 'results': (result) ? result.rows : null };
    res.send(results);
    client.release();
  }
  catch (err) {
    console.error(err);
    res.send(err);
  }
}

async function getAllTasks(req, res) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM task');
    const results = { 'results': (result) ? result.rows : null };
    res.send(results);
    client.release();
  }
  catch (err) {
    console.error(err);
    res.send(err);
  }
}



module.exports = {
    greetUser,
    getAllTasks,
    getAllCompletedTasks,
    getAllUncompletedTasks,
}