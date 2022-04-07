const ToDoModel = require("../models/models");

class ToDoController {
  static async getToDos(req, res) {
    try {
      const toDos = await ToDoModel.getToDos();
      return res.status(200).send(toDos.rows);
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async getToDosById(req, res) {
    try {
      const id = req.params.id;
      const toDo = await ToDoModel.getToDosById(id);
      return res.status(200).send(toDo.rows);
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async createToDo(req, res) {
    try {
      const { description } = req.body;
      const updatedToDos = await ToDoModel.createToDo(description);
      return res.status(201).send(updatedToDos.rows);
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async updateDescription(req, res) {
    try {
      const id = req.params.id;
      const { description } = req.body;
      const updatedToDos = await ToDoModel.updateDescription(id, description);
      return res.status(201).send(updatedToDos.rows);
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async markToDoComplete(req, res) {
    try {
      const id = req.params.id;
      const todo = await ToDoModel.markToDoComplete(id);
      return res.status(201).send(todo.rows);
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async deleteToDo(req, res) {
    try {
      const id = req.params.id;
      const deleted = await ToDoModel.deleteToDo(id);
      return res.status(200).send(deleted.rows);
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = ToDoController;
