const pool = require('../../../packages/database/postgres');

async function canUse(userId) {
  const res = await pool.query(
    'SELECT banned, muted_until FROM users WHERE discord_id=$1',
    [userId]
  );

  if (res.rowCount === 0) return true;

  const user = res.rows[0];
  if (user.banned) return false;
  if (user.muted_until && new Date(user.muted_until) > new Date()) return false;

  return true;
}

module.exports = canUse;
