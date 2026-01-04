module.exports = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  discord_id TEXT UNIQUE,
  plan TEXT DEFAULT 'free',
  banned BOOLEAN DEFAULT false,
  muted_until TIMESTAMP
);
`;
