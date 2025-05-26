const { Telegraf } = require('telegraf');

// Replace with your actual bot token
const bot = new Telegraf('8130796063:AAEPP4_H6rlA4XsxQTKqT_mKcK3S4JjUZr8');

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