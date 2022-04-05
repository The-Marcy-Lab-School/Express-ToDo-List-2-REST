const ToDoModel = require('../models/models')

class ToDoController {
  
    static async getToDos(req, res){
      try{
        const toDos = await ToDoModel.getToDos()
        res.status(200)
        res.send(toDos)
      }catch(error){
        res.status(500).json({
          message: error.message
        })
      }
    }
  
    static async getToDosById(req, res){
      try {
        const toDo = await ToDoModel.getToDosById();
        res.status(200)
        res.send(toDo)
      } catch (error) {
        res.status(500).json({
          message: error.message
        })
      }
    }

    // static createToDo(){
    //   ToDoModel.createToDo(req, res)
    // }

    // static updateDescription(){
    //   ToDoModel.updateDescription(req, res)
    // }

    // static markToDoComplete(){
    //   ToDoModel.markToDoComplete(req, res)
    // }

    // static deleteToDo(){
    //   ToDoModel.deleteToDo(req, res)
    // }
  }
  
  module.exports = ToDoController;