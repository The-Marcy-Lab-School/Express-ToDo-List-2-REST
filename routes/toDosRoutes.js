const ToDoController = require("../controllers/controller");
const router = require('express').Router();

router.get("/todos", ToDoController.getToDos);
  
router.get("/todos/:id", ToDoController.getToDosById);
  
router.post("/todos", ToDoController.createToDo);
  
router.put('/todos/:id', ToDoController.updateDescription)
  
router.put('/todos/:id/complete', ToDoController.markToDoComplete)
  
router.delete('/todos/:id', ToDoController.deleteToDo)

module.exports = router;