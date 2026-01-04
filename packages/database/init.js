const pool = require('./postgres');

module.exports = async function initDatabase() {
  try {
    await pool.query('SELECT 1');
    console.log('🗄️ Database connection verified');
  } catch (err) {
    console.error('❌ Database connection FAILED');
    throw err;
  }
};
