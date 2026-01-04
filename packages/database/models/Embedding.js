module.exports = `
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS embeddings (
  id SERIAL PRIMARY KEY,
  discord_id TEXT,
  content TEXT,
  embedding VECTOR(768)
);
`;
