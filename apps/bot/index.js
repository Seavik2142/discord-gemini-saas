require("dotenv").config();
const { Client, GatewayIntentBits, Events } = require("discord.js");
const initDatabase = require("../../packages/database/init");
const keepAlive = require("./server"); // 👈 ១. បន្ថែមការ require file server

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
      console.error("❌ Interaction error:", err);

      if (!interaction.replied && !interaction.deferred) {
        await interaction.reply({
          content: "❌ Something went wrong.",
          ephemeral: true,
        });
      }
    }
  }
});

// 🚀 START BOT
(async () => {
  try {
    // 👈 ២. ហៅឱ្យ Web Server ដំណើរការមុនពេល Bot Login
    keepAlive(); 

    if (process.env.POSTGRES_URL) {
      console.log("🗄️ Initializing database...");
      await initDatabase();
      console.log("🗄️ Database connected");
    } else {
      console.log("⚠️ Database skipped (POSTGRES_URL not set)");
    }

    await client.login(process.env.DISCORD_TOKEN);
  } catch (err) {
    console.error("❌ Bot startup failed:", err);
    process.exit(1);
  }
})();