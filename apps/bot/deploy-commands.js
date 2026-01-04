const { REST, Routes, SlashCommandBuilder } = require("discord.js");
require("dotenv").config();

const commands = [
  new SlashCommandBuilder()
    .setName("ai")
    .setDescription("Ask AI")
    .addStringOption(o =>
      o.setName("prompt")
        .setDescription("Your prompt")
        .setRequired(true)
    ),
].map(c => c.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  console.log("⏳ Deploying slash commands...");
  await rest.put(
    Routes.applicationCommands(process.env.CLIENT_ID),
    { body: commands }
  );
  console.log("✅ Slash commands deployed");
})();
