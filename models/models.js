const { pool } = require("../database/db");

class ToDoModel {
  static getToDos() {
    return pool.query("SELECT * FROM todos");
  }

  static getToDosById(id) {
    return pool.query("SELECT * FROM todos WHERE id=$1", [id]);
  }

  static createToDo(description) {
    return pool.query(
      "INSERT INTO todos (description, completed) values($1, $2) returning *",
      [description, false]
    );
  }

  static updateDescription(id, description) {
    return pool.query("UPDATE todos SET description=$1 WHERE id=$2 returning *", [
      description,
      id,
    ]);
  }

  static markToDoComplete(id) {
    return pool.query("UPDATE todos SET completed=$1 WHERE id=$2 returning *", [
      true,
      id,
    ]);
  }

    static deleteToDo(id) {
      return pool.query("DELETE FROM todos WHERE id=$1 returning *", [id]);
      ;
    }
  
}

module.exports = ToDoModel;
