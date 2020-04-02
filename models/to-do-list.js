const db = require('../db');

class ToDoList {
    
    static addTask(req, res){
        const {name, description} = req.body
        const dateAdded = new Date()
        const queryText = 'INSERT INTO task (name, description, date_added) VALUES ($1, $2, $3);'
        db.query(queryText, [name, description, dateAdded])
        .then((data) => {
          console.log(data);
          res.status(201).json({ message: 'New task created.' });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: '500: Internal Server Error. Resource not created.' });
        });
        }
    static deleteTask(req, res){
        const {id} = req.params
        const queryText = 'DELETE FROM task WHERE task_id = $1'
        db.query(queryText, [id])
        .then((data) => {
          console.log(data);
          res.status(201).json({ message: 'Task deleted.' });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: '500: Internal Server Error. Resource not deleted.' });
        });
    }
    static updateTask(req, res){
        const {id} = req.params
        const {name, description} = req.body
        const dateAdded = new Date()
        const queryText = 'UPDATE task SET (name, description, date_added) = ($2, $3, $4) WHERE task_id = $1;'
        db.query(queryText, [id, name, description, dateAdded])
        .then((data) => {
          console.log(data);
          res.status(201).json({ message: 'Task updated.' });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: '500: Internal Server Error. Resource not updated.' });
        });
    }
    static completeTask(req, res){
        const {id} = req.params
        const dateCompleted = new Date()
        const queryText = `UPDATE task SET (is_complete, date_completed) = ($2, $3) WHERE task_id = $1;`
        
        db.query(queryText, [id, true, dateCompleted])
        .then((data) => {
          console.log(data);
          res.status(201).json({ message: 'Task completed.' });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: '500: Internal Server Error. Resource not completed.' });
        });
    }
}

module.exports = ToDoList