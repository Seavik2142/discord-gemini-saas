const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: false // ✅ LOCAL DB
});

module.exports = pool;
