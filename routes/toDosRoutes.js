const ToDoController = require("../controllers/controller");
const router = require("express").Router();

router.get("/", ToDoController.getToDos);

router.get("/:id", ToDoController.getToDosById);

router.post("/", ToDoController.createToDo);

router.put("/:id", ToDoController.updateDescription);

router.put("/:id/complete", ToDoController.markToDoComplete);

router.delete("/:id", ToDoController.deleteToDo);

module.exports = router;
