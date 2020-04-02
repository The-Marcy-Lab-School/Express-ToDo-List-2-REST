const express = require('express');
const bodyParser = require('body-parser');
const taskListRoute = require('./routes/taskList');
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});


const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(taskListRoute);

app.get('./db', async(req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM todos');
    const results = { 'results': (result) ? result.rows : null };
    client.release();
  }
  catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}.`));
