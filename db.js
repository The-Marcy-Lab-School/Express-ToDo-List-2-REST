const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
  // user: 'ec2-user',
  // host: '/var/run/postgresql',
  // database: 'to_do_list',
  // password: null,
  // port: 5432,
})


module.exports = {
  query: (text, params) => {
    return pool.query(text, params)
  },
  pool,
}