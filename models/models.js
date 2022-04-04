const { pool } = require("./database/db.js");

class ToDoModel {
  static async getToDos(req, res) {
    const todos = await pool.query("SELECT * FROM todos");
    res.status(200).send(todos);
  }

  static async getToDosById(req, res) {
    const id = req.params.id;
    const todosId = await pool.query("SELECT * FROM todos WHERE id=$1", [id]);
    console.log(todosId.rows);
    if (todosId.length === 0) {
      res.status(404).send("WHOOPS! Does not exist");
    }
    res.status(200).send(todosId.rows[0]);
  }

  static async createToDo(req, res) {
    const { description } = req.body;
    const todos = await pool.query(
      "INSERT INTO todos (description, completed) values($1, $2)",
      [description, false]
    );
    const select = await pool.query("SELECT * FROM todos");
    res.status(204).send(select);
  }

  static async updateDescription(req, res) {
    const id = req.params.id;
    const { description } = req.body;
    let todo = await pool.query("SELECT * FROM todos WHERE id=$1", [id]);
    if (todo.length === 0) {
      res.status(404).send("todo does not exist!");
    }
    todo = await pool.query("UPDATE todos SET description=$1 WHERE id=$2", [
      description,
      id,
    ]);
    res.status(201).send(todo);
  }

  static async markToDoComplete(req, res) {
    const id = req.params.id;
    const { completed } = req.body;
    let todo = await pool.query("SELECT * FROM todos WHERE id=$1", [id]);
    if (todo.length === 0) {
      res.status(404).send("todo does not exist!");
    }
    todo = await pool.query("UPDATE todos SET completed=$1 WHERE id=$2", [
      true,
      id,
    ]);
    res.status(201).send(todo);
  }

  static async deleteToDo(req, res) {
    const id = req.params.id;
    const todos = await pool.query("DELETE FROM todos WHERE id=$1", [id]);
    res.status(204).send("Successfully deleted todo!");
  }
}

module.exports = ToDoModel;
