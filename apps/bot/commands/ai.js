const { generateText } = require("../../../packages/ai-core/groq");

module.exports = async (interaction) => {
  try {
    await interaction.deferReply();

    const question = interaction.options.getString("question");

    const answer = await generateText(question);

    await interaction.editReply(answer);
  } catch (err) {
    console.error("AI Command Error:", err);

    if (interaction.deferred || interaction.replied) {
      await interaction.editReply("⚠️ AI is temporarily unavailable.");
    } else {
      await interaction.reply({
        content: "⚠️ AI is temporarily unavailable.",
        ephemeral: true
      });
    }
  }
};
