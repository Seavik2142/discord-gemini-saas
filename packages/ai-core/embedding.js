async function createEmbedding(text) {
  // Groq does not support embeddings
  // Return null to keep system stable
  return null;
}

module.exports = { createEmbedding };
