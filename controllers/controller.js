const ToDoModel = require('../models/models')

class ToDoController {
  
    static async getToDos(res){
      try{
        const toDos = await ToDoModel.getToDos()
        res.status(200).send(toDos)
      }catch(error){
        res.status(500).json({
          message: error.message
        })
      }
    }
  
    static async getToDosById(req, res){
      try {
        const id = req.params.id;
        const toDo = await ToDoModel.getToDosById(id);
        res.status(200).send(toDo.rows)
      } catch (error) {
        res.status(500).json({
          message: error.message
        })
      }
    }

    static async createToDo(req, res){
      try {
        const { description } = req.body;
        const updatedToDos = await ToDoModel.createToDo(description);
        res.status(201).send(updatedToDos)
      } catch (error) {
        res.status(500).json({
          message: error.message
        })
      }
      
    }

    static async updateDescription(req, res){
      try {
        const id = req.params.id;
        const { description } = req.body;
        const updatedToDos = await ToDoModel.updateDescription(id, description)
        res.status(201).send(updatedToDos)
      } catch (error) {
        res.status(500).json({
          message: error.message
        })
      }
      
    }

    static async markToDoComplete(req, res){
      try {
        const id = req.params.id;
        const todo = await ToDoModel.markToDoComplete(id)
        res.status(201).send(todo.rows[0]);
      } catch (error) {
        res.status(500).json({
          message: error.message
        })
      }
      
    }

    static async deleteToDo(req, res){
      try {
        const id = req.params.id;
        const deleted = await ToDoModel.deleteToDo(id)
        res.status(200).send(deleted)
      } catch (error) {
        res.status(500).json({
          message: error.message
        })
      }
     
    }
  }
  
  module.exports = ToDoController;