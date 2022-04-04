const ToDoModel = require('models/models.js')

class ToDoController {
  
    static getToDos(req, res){
      ToDoModel.getToDos(req, res)
      // if successful, return 200 and list of todos if 
      // if not successful, return 500 because database is down
    }
  
    static getToDosById(req, res){
      ToDoModel.getToDosById(req, res) 
      // if successful, return 200 and new todo
      // if not successful, return 500 because database is down
    }

    static createToDo(req, res){
      ToDoModel.createToDo(req, res)
    }

    static updateDescription(req, res){
      ToDoModel.updateDescription(req, res)
    }

    static markToDoComplete(req, res){
      ToDoModel.markToDoComplete(req, res)
    }

    static deleteToDo(req, res){
      ToDoModel.deleteToDo(req, res)
    }
  }
  
  module.exports = ToDoController;