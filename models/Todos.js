const db = require('../db');

class Todos {
  static getAll() {
    return db.query('SELECT * FROM task');
  }

  static getLast() {
    return db.query(`SELECT * FROM task
      ORDER BY task_id
      DESC LIMIT 1`);
  }

  static find(taskId) {
    const queryText = 'SELECT * FROM task WHERE task_id = $1';
    return db.query(queryText, [taskId]);
  }

  static create(
    taskName = null,
    taskDescription = null,
    isComplete = false,
    dueDate = null,
  ) {
    const queryText = `INSERT INTO task
    (task_name, task_description, is_complete, due_date)
    VALUES ($1, $2, $3, $4)`;
    return db.query(queryText, [
      taskName,
      taskDescription,
      isComplete,
      dueDate,
    ]);
  }

  static delete(taskId) {
    const queryText = 'DELETE FROM task WHERE task_id = $1';
    return db.query(queryText, [taskId]);
  }

  static toggleIsComplete(taskId) {
    const queryText = `UPDATE task
    SET is_complete = NOT is_complete
    WHERE task_id = $1`;
    return db.query(queryText, [taskId]);
  }
}

module.exports = Todos;
