const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

module.exports = { query: (text, parms) => pool.query(text, params) };
