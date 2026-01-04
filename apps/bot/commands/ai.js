const generateText = require('../../../packages/ai-core/groq');

module.exports = async (interaction) => {
  try {
    // ✅ correct option name
    const question = interaction.options.getString('question');

    if (!question) {
      return interaction.reply({
        content: '❗ Please provide a prompt.',
        ephemeral: true,
      });
    }

    await interaction.deferReply();

    const answer = await generateText(question);

    await interaction.editReply(answer);

  } catch (err) {
    console.error('AI Command Error:', err);

    if (!interaction.replied && !interaction.deferred) {
      await interaction.reply({
        content: '⚠️ AI error occurred.',
        ephemeral: true,
      });
    }
  }
};
