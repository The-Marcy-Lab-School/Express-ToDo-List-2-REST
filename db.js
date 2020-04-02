const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

const connectDb = async () => {
  const client = await pool.connect();
  return clienty.query;
};
module.exports = {
  query: (text, params) => connectDb()(text, params),
};
