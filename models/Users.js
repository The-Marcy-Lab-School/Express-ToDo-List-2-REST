const db = require('../db');

class Users {
  static createUser(firstName, lastName, username) {
    const queryText = 'INSERT INTO users (first_name, last_name, username) VALUES ($1, $2, $3);';

    return db.query(queryText, [firstName, lastName, username]);
  }

  static getUserById(id) {
    const queryText = 'SELECT * FROM users WHERE id = $1;';

    return db.query(queryText, [id]);
  }
}

module.exports = Users;
