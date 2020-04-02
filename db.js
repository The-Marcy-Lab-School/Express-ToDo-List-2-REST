const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

pool.on('connect', (client) => {
  module.exports = {
    query: (text, params) => client.query(text, params),
  };
});
