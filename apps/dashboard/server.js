require('dotenv').config();
const express = require('express');
const initDatabase = require('../../packages/database/init');
const pool = require('../../packages/database/postgres');

(async () => {
  await initDatabase();

  const app = express();

  app.get('/admin', async (req, res) => {
    const data = await pool.query(
      'SELECT * FROM chats ORDER BY created_at DESC LIMIT 50'
    );
    res.json(data.rows);
  });

  app.listen(3000, () =>
    console.log('🖥️ Dashboard running at http://localhost:3000/admin')
  );
})();
