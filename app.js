const express = require('express');
const todosRoute = require('./routes/todos');

const app = express();
const port = process.env.PORT || 3000;

app.use(todosRoute);

app.listen(port, () => console.log(`Listening on port ${port}...`));
