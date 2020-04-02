const { Pool } = require('pg');

const pool = new Pool({
  user: 'ec2-user',
  host: '/var/run/postgresql',
  database: 'tasklist',
  password: null,
  port: 5432,
  connectionString: process.env.DATABASE_URL || 'postgresql://ec2-user:null@/var/run/postgresql:8080/tasklist'

});


module.exports = {
  query: (text, params) => pool.query(text, params),
};
