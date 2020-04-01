const express = require('express');
const todosController = require('../controllers/todos');

const router = express.Router();

router.get('/todos', todosController.getAll);

router.get('/todos/:taskId', todosController.getTodo);

router.post('/todos', todosController.addTodo);

router.delete('/todos/:taskId', todosController.removeTodo);

router.put('/todos/:taskId', todosController.editTodo);

module.exports = router;
