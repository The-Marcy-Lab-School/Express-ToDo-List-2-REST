const db = require('../db');

class Task {
    
    static getTasks() {
        return db.query(`SELECT * FROM tasks;`);
    } 
    
    static createTask(userId, dateCreated, dateDue, title, description){
        const queryText = 'INSERT INTO tasks (user_id, date_created, date_due, completed, title, description) VALUES ($1, $2, $3, $4, $5, $6);';
        return db.query(queryText, [userId, dateCreated, dateDue, false, title, description]);
    }
    
    static getLastCreated() {
        return db.query(`SELECT * FROM tasks ORDER BY id DESC LIMIT 1;`);
    }
    
    static getTaskById(taskId) {
        return db.query(`SELECT * FROM tasks WHERE tasks.id = $1;`, [taskId]);
    }
    
    static updateTask(taskId, completed) {
        const queryText = `UPDATE tasks SET completed = $1 WHERE (tasks.id = $2);`;
        
        return db.query(queryText, [completed, taskId]);
    }
    
    static deleteTask(taskId) {
        return db.query(`DELETE FROM tasks WHERE (tasks.id = $1);`, [taskId]);
    }
    
}

module.exports = Task;