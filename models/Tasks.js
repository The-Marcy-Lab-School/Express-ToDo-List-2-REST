const db = require('../db');

class Task {
  static createTask(name, dueDate) {
    const queryText = 'INSERT INTO tasks (name, due_date) VALUES ($1, $2);';

    return db.query(queryText, [name, dueDate]);
  }

  static getAllTasks() {
    const queryText = 'SELECT * FROM tasks;';

    return db.query(queryText);
  }

  static getLastCreated() {
    const queryText = 'SELECT * FROM tasks ORDER BY task_id DESC LIMIT 1;';
    return db.query(queryText);
  }

  static getTaskById(taskId) {
    const queryText = 'SELECT * FROM tasks WHERE task_id = $1;';

    return db.query(queryText, [taskId]);
  }

  static updateTask(taskId, name, dueDate) {
    const queryText = 'UPDATE tasks SET name = $2, due_date = $3 WHERE task_id = $1;';

    return db.query(queryText, [taskId, name, dueDate]);
  }

  static deleteTask(taskId) {
    const queryText = 'DELETE FROM tasks WHERE task_id = $1;';

    return db.query(queryText, [taskId]);
  }

  static isCompleted(taskId, completed) {
    if (completed === 't') {
      const queryText = 'UPDATE tasks SET completed = false WHERE task_id = $1;';
      return db.query(queryText, [taskId]);
    }

    const queryText = 'UPDATE tasks SET completed = true WHERE task_id = $1;';
    return db.query(queryText, [taskId]);
  }
}

module.exports = Task;
