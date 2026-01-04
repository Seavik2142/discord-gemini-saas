const { REST, Routes, SlashCommandBuilder } = require("discord.js");
require("dotenv").config();

const commands = [
  new SlashCommandBuilder()
    .setName("ai")
    .setDescription("Ask AI")
    .addStringOption(option =>
      option
        .setName("prompt") // ✅ MUST match ai.js
        .setDescription("Your question")
        .setRequired(true)
    )
].map(cmd => cmd.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log("⏳ Deploying slash commands...");
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );
    console.log("✅ Slash commands deployed");
  } catch (err) {
    console.error("❌ Deploy failed:", err);
  }
})();
