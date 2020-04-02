const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

module.exports = {
  query: (text, params) => client.query(text, params),
};
