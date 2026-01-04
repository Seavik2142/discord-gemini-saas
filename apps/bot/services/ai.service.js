const { generateText } = require('../../../packages/ai-core/groq');

async function generateAIResponse(prompt) {
  return await generateText(prompt);
}

module.exports = {
  generateAIResponse
};
