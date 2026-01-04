const pool = require('../database/postgres');

async function vectorSearch(serverId, vector, limit = 3) {
  const res = await pool.query(
    `
    SELECT content
    FROM embeddings
    WHERE server_id = $1
    ORDER BY embedding <=> $2
    LIMIT $3
    `,
    [serverId, vector, limit]
  );

  if (res.rows.length === 0) return '';
  return res.rows.map(r => r.content).join('\n');
}

module.exports = vectorSearch;
