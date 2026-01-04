const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function generateText(prompt) {
  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant", // ✅ active model
    messages: [
      { role: "system", content: "You are a helpful AI assistant." },
      { role: "user", content: prompt },
    ],
    temperature: 0.7,
    max_tokens: 500,
  });

  return completion.choices[0]?.message?.content || "No response.";
}

module.exports = { generateText };
