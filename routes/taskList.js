const express = require('express');
const taskController = require('../controllers/todoList');

const router = express.Router();

router.get('/tasks', taskController.getAllTasks);

router.get('/tasks/:id', taskController.getTaskById);

router.post('/tasks', taskController.createTask);

router.put('/update:/id', taskController.updateTask);

router.delete('/delete/:id', taskController.deleteTask);

module.exports = router;
