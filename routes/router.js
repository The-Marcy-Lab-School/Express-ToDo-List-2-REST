const express = require('express')
const listController = require('../controllers/to-do-query')
const toDoList = require('../models/to-do-list')
const router = express.Router()
const pool = require('../db')

router.get('/', listController.greetUser)
router.get('/incomplete-tasks', listController.getAllIncompletedTasks)
router.get('/completed-tasks', listController.getAllCompletedTasks)
router.get('/tasks', listController.getAllTasks)
router.post('/add-task', toDoList.addTask)
router.delete('/delete-task/:id', toDoList.deleteTask)
router.put('/update-task/:id', toDoList.updateTask)
router.put('/complete-task/:id', toDoList.completeTask)



module.exports = router
