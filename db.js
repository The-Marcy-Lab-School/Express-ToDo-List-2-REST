const { Pool } = require('pg');

const pool = new Pool({
  host: '/var/run/postgresql',
  database: 'todo_api_1',
  port: '5432',
  user: 'enmanuel',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
