const { Pool } = require('pg');

/* process.env.DATABASE_URL not working?
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
*/

module.exports = { query: (text, params) => connection(text, params) };
