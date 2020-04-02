const express = require('express');
const bodyParser = require('body-parser');
const todosRoute = require('./routes/todos');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(todosRoute);

app.get('/', (req, res) => {
  res.redirect('/todos');
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
