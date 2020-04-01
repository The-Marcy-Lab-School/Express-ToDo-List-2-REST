const { Pool } = require('pg');

const pool = new Pool({
  user: 'ubuntu',
  host: '/var/run/postgresql',
  database: 'todos',
  port: 5432,
  password: null,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
