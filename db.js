const {Pool} = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// const pool = new Pool({
//   user: 'postgres',
//   host: '/var/run/postgresql',
//   database: 'to_do',
//   password: '',
//   port: 5432
// });

module.exports = {
    query: (text, params) => {
        return pool.query(text, params);
    },
    pool,
};