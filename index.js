// index.js

const fs = require('fs');
const TelegramMain = require('./bot/telegram/Main');

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const telegramBot = new TelegramMain(config.bot_token);

console.log("Bot läuft und wartet auf Nachrichten...");
