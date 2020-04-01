const express = require('express');
const bodyParser = require('body-parser');
const taskListRoute = require('./routes/taskList');


const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(taskListRoute);

app.listen(port, () => console.log(`Listening on port ${port}.`));
