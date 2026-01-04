const { generateAIResponse } = require('../services/ai.service');

module.exports = async (interaction) => {
  try {
    const prompt = interaction.options.getString('prompt');

    if (!prompt) {
      return interaction.reply({
        content: '❌ Please provide a prompt.',
        flags: 64
      });
    }

    await interaction.deferReply();

    const response = await generateAIResponse(prompt);

    await interaction.editReply(response);
  } catch (err) {
    console.error("AI command error:", err);

    if (interaction.deferred || interaction.replied) {
      await interaction.editReply('❌ AI error occurred.');
    } else {
      await interaction.reply({
        content: '❌ AI error occurred.',
        flags: 64
      });
    }
  }
};
