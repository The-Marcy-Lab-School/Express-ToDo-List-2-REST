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
    const queryText = 'SELECT * FROM tasks WHERE id = $1;';

    return db.query(queryText, [taskId]);
  }

  static updateTask(taskId, name, dueDate) {
    const queryText = 'UPDATE tasks SET (name, due_date) = ($2, $3) WHERE id = $1;';

    return db.query(queryText, [taskId, name, dueDate]);
  }

  static deleteTask(taskId) {
    const queryText = 'DELETE FROM tasks WHERE id = $1;';

    return db.query(queryText, [taskId]);
  }

  static isCompleted(taskId, completedStatus) {
    if (completedStatus === 't') {
      const queryText = 'UPDATE tasks SET (completed) = (false) WHERE id = $1;';
      return db.query(queryText, [taskId]);
    }

    const queryText = 'UPDATE tasks SET (completed) = (true) WHERE id = $1;';
    return db.query(queryText, [taskId]);
  }
}

module.exports = Task;
