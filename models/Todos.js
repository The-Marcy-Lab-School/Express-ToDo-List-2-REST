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

  static create(taskName, taskDescription, isComplete, dueDate) {
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

  static update(taskId, taskName, taskDescription, isComplete, dueDate) {
    const queryText = `UPDATE task
    SET task_name = $2,
    task_description = $3,
    is_complete = $4,
    due_date = $5
    WHERE task_id = $1`;
    return db.query(queryText, [
      taskId,
      taskName,
      taskDescription,
      isComplete,
      dueDate,
    ]);
  }

  static delete(taskId) {
    const queryText = 'DELETE FROM task WHERE taskId = $1';
    return db.query(queryText, [taskId]);
  }
}

module.exports = Todos;
