const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const User = require('./controllers/User');
const Task = require('./controllers/Task');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.json({
        'GET /users': 'get all users',
        'POST /users': 'adds user to users',
        'GET /users/:id': 'gets user by id',
        'GET /tasks': 'gets all available tasks',
        'POST /tasks': 'adds task to list',
        'GET /tasks/:id': 'gets task by task id',
        'PUT tasks/:id': 'updates task completed status',
        'DELETE tasks/:id': 'deletes task based on task id',
    });
});

app.post('/users', (req, res) => {
    const { first_name, last_name, username } = req.body;

    User.createUser(first_name, last_name, username)
        .then(() => User.getLastCreated())
        .then(user => res.status(201).json(user.rows[0]))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: '500: Internal Server Error. Resource not created' });
        });
});

app.get('/users', (req, res) => {
    User.getUsers()
        .then(user => res.status(201).json(user.rows))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: '500: Internal Server Error. Resource not created' });
        });
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;

    User.getUserById(id)
        .then(user => res.status(201).json(user.rows[0]))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: '500: Internal Server Error. Resource not created' });
        });
});

app.get('/tasks', (req, res) => {
    Task.getTasks()
        .then(user => res.status(201).json(user.rows))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: '500: Internal Server Error. Resource not created' });
        });
});

app.post('/tasks', (req, res) => {
    const { user_id, date_created, date_due, title, description } = req.body;

    Task.createTask(user_id, date_created, date_due, title, description)
        .then(() => Task.getLastCreated())
        .then(user => res.status(201).json(user.rows[0]))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: '500: Internal Server Error. Resource not created' });
        });

});

app.get('/tasks/:id', (req, res) => {
    const { id } = req.params;

    Task.getTaskById(id)
        .then(user => res.status(201).json(user.rows[0]))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: '500: Internal Server Error. Resource not created' });
        });
});

app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;

    Task.updateTask(id, completed)
        .then(user => res.status(201).json(user.rows))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: '500: Internal Server Error. Resource not created' });
        });
});

app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;

    Task.deleteTask(id)
        .then(user => res.status(201).json(user.rows))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: '500: Internal Server Error. Resource not created' });
        });
});


app.listen(port, () => console.log(`Now listening on port ${port}`));
