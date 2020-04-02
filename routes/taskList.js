const express = require('express');
const taskController = require('../controllers/todoList');
const router = express.Router();

router.get('/', (req, res) => {
  res.json('Hello');
});


router.get('/tasks', taskController.getAllTasks);

router.get('/tasks/:id', taskController.getTaskById);

router.post('/create', taskController.createTask);

router.put('/isComplete/:id', taskController.isCompleted);

router.put('/update/:id', taskController.updateTask);

router.delete('/delete/:id', taskController.deleteTask);

module.exports = router;
