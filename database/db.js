const knex = require('knex')
const knexFile = require('../knexfile')
const env = process.env.DB_ENV || 'development'
const db = knex(knexFile[env])
const { Pool } = require('pg');


const connectionDevelopment = {
    database: 'express_todo_list',
    user: 'postgres',
    password: '',
    host: 'localhost'
  }
  
  const connectionProduction = {
    connectionString: process.env.DATABASE_URL, 
    ssl: {rejectUnauthorized: false}
  }
  
  const pool = new Pool(process.env.NODE_ENV === 'production' ? connectionProduction : connectionDevelopment)

  module.exports = {
    pool,
    db
  }