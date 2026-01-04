const Groq = require("groq-sdk");

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function generateText(prompt) {
  const completion = await client.chat.completions.create({
    model: "llama-3.1-8b-instant", // ✅ active Groq model
    messages: [
      { role: "user", content: prompt }
    ],
  });

  return completion.choices[0]?.message?.content || "No response";
}

module.exports = {
  generateText
};
