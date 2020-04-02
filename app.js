const express = require('express');

const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const todoRouter = require('./routes/route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(todoRouter);

app.listen(port, () => console.log(`Now listening on port ${port}...`));
