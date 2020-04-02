const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

const connectDb = async () => {
  const connection = await pool.connect();
  return connection.query;
};

const query = connectDb().catch((err) => {
  console.error(err);
});

module.exports = {
  query: (text, params) => query(text, params),
};
