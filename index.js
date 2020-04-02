const express = require('express');
const bodyParser = require('body-parser');
const taskListRoute = require('./routes/taskList');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

pool.connect();


const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(taskListRoute);

app.listen(port, () => console.log(`Listening on port ${port}.`));
