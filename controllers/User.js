const db = require('../db');

class User{
    
    static createUser(firstName, lastName, userName) {
        return db.query(`INSERT INTO users (first_name, last_name, username)
                         VALUES ($1, $2, $3);`, [firstName, lastName, userName]);
    }
    
    static getLastCreated() {
        return db.query(`SELECT * FROM users ORDER BY id DESC LIMIT 1;`);
    }
    
    static getUsers(){
        return db.query('SELECT * FROM users');
    }
    
}

module.exports = User;