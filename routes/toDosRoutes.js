const ToDoController = require("../controllers/controller");
const router = require('express').Router();

router.get('/', (req, res) => res.status(200).send('This is my API.'))

router.get('/todos', ToDoController.getToDos);
  
router.get('/todos/:id', ToDoController.getToDosById);
  
router.post("/todos", ToDoController.createToDo);
  
router.put('/todos/:id', ToDoController.updateDescription)
  
router.put('/todos/:id/complete', ToDoController.markToDoComplete)
  
router.delete('/todos/:id', ToDoController.deleteToDo)

module.exports = router;