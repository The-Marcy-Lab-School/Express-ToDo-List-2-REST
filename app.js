const express = require('express');

const bodyParser = require('body-parser');

const { Pool } = require('pg');
const task = require('./controllers/task');

const pool = new Pool();

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/task', task.getAll);

app.post('/task', task.createTask);

app.put('/completedTask/:id', task.markComplete);

app.put('/task/:id', task.updateTask);

app.delete('/task/:id', task.deleteTask);

app.get('/', (req, res) => {
  res.json('Hello World');
});

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM task');
    const results = { results: (result) ? result.rows : null };
    res.render('pages/db', results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send(`Error ${err}`);
  }
});

pool.query('SELECT * FROM task ;').then((result)=> console.log(result));

app.listen(port, () => console.log(`Now listening on port ${port}`));
