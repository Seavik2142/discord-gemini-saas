const pool = require('../../../packages/database/postgres');

async function saveChat(userId, serverId, role, content) {
  await pool.query(
    `
    INSERT INTO chats (discord_id, server_id, role, content)
    VALUES ($1,$2,$3,$4)
    `,
    [userId, serverId, role, content]
  );
}

async function saveEmbedding(userId, serverId, content, embedding) {
  await pool.query(
    `
    INSERT INTO embeddings (discord_id, server_id, content, embedding)
    VALUES ($1,$2,$3,$4)
    `,
    [userId, serverId, content, embedding]
  );
}

module.exports = { saveChat, saveEmbedding };
