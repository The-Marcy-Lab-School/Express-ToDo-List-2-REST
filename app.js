const express = require('express');

const bodyParser = require('body-parser');

const task = require('./controllers/task');

const { Pool } = require('pg');
const pool = new Pool();

const app = express();

const port =  process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/task', task.getAll);

app.post('/task', task.createTask);

app.put('/completedTask/:id', task.markComplete);

app.put('/task/:id', task.updateTask);

app.delete('/task/:id', task.deleteTask);

pool.connect();

app.listen(port, () => console.log(`Now listening on port ${port}`));
