module.exports = `
CREATE TABLE IF NOT EXISTS chats (
  id SERIAL PRIMARY KEY,
  discord_id TEXT,
  role TEXT,
  content TEXT,
  created_at TIMESTAMP DEFAULT now()
);
`;
