const { Telegraf } = require('telegraf');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080; // 👈 Now Railway has a port to bind

// Bot setup
const bot = new Telegraf('YOUR_BOT_TOKEN');
const WEB_APP_URL = 'https://bot-forge-frontend.vercel.app';

bot.start((ctx) => {
  ctx.reply(`Welcome ${ctx.from.first_name}! Type /launch to open the WebApp.`);
});

bot.command('launch', (ctx) => {
  ctx.reply("Launch WebApp", {
    reply_markup: {
      inline_keyboard: [[
        { text: "Open App", web_app: { url: WEB_APP_URL } }
      ]]
    }
  });
});

bot.launch();
console.log('🚀 Telegram Bot running...');

// 👇 Dummy HTTP server to keep Railway container alive
app.get("/", (req, res) => res.send("Bot is live."));
app.listen(PORT, () => console.log(`✅ Server listening on port ${PORT}`));
