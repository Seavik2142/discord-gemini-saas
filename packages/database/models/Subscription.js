module.exports = `
CREATE TABLE IF NOT EXISTS subscriptions (
  id SERIAL PRIMARY KEY,
  discord_id TEXT,
  plan TEXT,
  expires_at TIMESTAMP
);
`;
