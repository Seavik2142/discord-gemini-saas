const generateText = require("../../services/ai.service");

module.exports = async (interaction) => {
  try {
    const prompt =
      interaction.options.getString("prompt") ||
      interaction.options.getString("question");

    if (!prompt) {
      return interaction.reply({
        content: "❌ Please provide a prompt.",
        ephemeral: true,
      });
    }

    await interaction.deferReply();

    const result = await generateText(prompt);

    await interaction.editReply(result);
  } catch (err) {
    console.error("AI command error:", err);

    if (!interaction.replied && !interaction.deferred) {
      await interaction.reply({
        content: "❌ AI error occurred.",
        ephemeral: true,
      });
    }
  }
};
