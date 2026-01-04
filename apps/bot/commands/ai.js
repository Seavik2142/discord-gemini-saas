const { generateText } = require("../../../packages/ai-core/groq");

module.exports = async (interaction) => {
  try {
    // ⭐ MUST defer to avoid "application did not respond"
    await interaction.deferReply();

    const prompt = interaction.options.getString("prompt");

    if (!prompt) {
      return await interaction.editReply("❗ Please provide a prompt.");
    }

    const response = await generateText(prompt);

    await interaction.editReply(response);
  } catch (error) {
    console.error("AI Command Error:", error);

    if (interaction.deferred || interaction.replied) {
      await interaction.editReply("⚠️ AI is temporarily unavailable.");
    } else {
      await interaction.reply({
        content: "⚠️ AI is temporarily unavailable.",
        ephemeral: true,
      });
    }
  }
};
