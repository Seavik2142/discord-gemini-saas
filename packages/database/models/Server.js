module.exports = `
CREATE TABLE IF NOT EXISTS servers (
  id SERIAL PRIMARY KEY,
  server_id TEXT UNIQUE,
  owner_id TEXT,
  system_prompt TEXT DEFAULT ''
);
`;
