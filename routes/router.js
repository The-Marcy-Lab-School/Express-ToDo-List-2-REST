const express = require('express')
const listController = require('../controllers/to-do-query')
const toDoList = require('../models/to-do-list')
const router = express.Router()
const pool = require('../db').pool

router.get('/', listController.greetUser)
router.get('/tasks', listController.getAllUncompletedTasks)
router.get('/completed-tasks', listController.getAllCompletedTasks)
router.get('/list', listController.getAllTasks)
router.post('/add-task', toDoList.addTask)
router.delete('/delete-task/:id', toDoList.deleteTask)
router.put('/update-task/:id', toDoList.updateTask)
router.post('/complete-task/:id', toDoList.completeTask)



module.exports = router
