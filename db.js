const pg = require('pg');

/* process.env.DATABASE_URL not working?
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
*/

const connectionString = `postgres://fzktswgronzklb:06c1e360816845c7c6a31dccaad7a418b0b700fc9772fee1d0ceee81195bc34e@ec2-52-87-58-157.compute-1.amazonaws.com:5432/d9kveslllnenj0`;

let connection;
pg.connect(connectionString, function (err, client, done) {
  connection = client.query;
});

module.exports = { query: (text, params) => connection(text, params) };
