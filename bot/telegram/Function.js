// bot/telegram/Function.js

const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

const {
    debug_channel,
    debug_group,
    main_channel,
    main_group
} = config;

module.exports = {
    onTextFunction: (bot) => {
        bot.onText(/.*/, (msg) => {
            const chatId = msg.chat.id;
            const text = msg.text;
            bot.sendMessage(chatId, `Du hast gesendet: ${text}`);

            // Beispiel: Senden Sie eine Debug-Nachricht an den Debug-Kanal
            bot.sendMessage(debug_channel, `Debug-Nachricht: ${text}`);
        });
    }
};
