require("dotenv").config();
const { Client, GatewayIntentBits, Events } = require("discord.js");
const initDatabase = require("../../packages/database/init");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, () => {
  console.log(`✅ Bot logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ai") {
    try {
      const aiCommand = require("./commands/ai");
      await aiCommand(interaction);
    } catch (err) {
      console.error("Interaction error:", err);
    }
  }
});

// 🚀 START BOT
(async () => {
  console.log("🗄️ Initializing database...");
  await initDatabase();
  await client.login(process.env.DISCORD_TOKEN);
})();
