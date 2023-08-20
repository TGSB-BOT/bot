const fs = require('fs');
const TelegramMain = require('./bot/telegram/Main');

/**
 * @author r0bster97
 * This is the initial starting class for the telegram bot which initiates the TG-Bot object
 */

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const telegramBot = new TelegramMain(config.bot_token);

console.log("Bot läuft und wartet auf Nachrichten...");
