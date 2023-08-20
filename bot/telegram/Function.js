const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const texts = JSON.parse(fs.readFileSync('./bot/telegram/texts.json', 'utf8'));
const usersDbPath = './bot/database/users.json';

/**
 * @author r0bster97
 * Class that contains all function logic for the telegram bot
 */

const {
    escapeMarkdownV2,
    sendMessageToUser,
    sendMessageToDebugChannel,
    sendMessageToDebugGroup,
    sendMessageToMainChannel,
    sendMessageToMainGroup
} = require('./helper');


/**
 * Function that is active whenever a user sends a message to the bot
 * @param bot TG bot object 
 */
function onTextFunction(bot) {
    bot.on('polling_error', (error) => {
        console.log(error);
    });
    
    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id;
        // usernames already get stored including the @ symbol
        const username = "@" + (msg.from.username || msg.from.first_name || "Benutzer");
        const users = JSON.parse(fs.readFileSync(usersDbPath, 'utf8'));
        const userExists = users.some(user => user.id === msg.from.id);
        if(!userExists){
            // Checks if the user is already stored in the database, if not, store it
            const usersDb = JSON.parse(fs.readFileSync(usersDbPath, 'utf8'));
            usersDb.push({ id: msg.from.id, username: username });
            fs.writeFileSync(usersDbPath, JSON.stringify(usersDb, null, 2));
        }

            // always delete the /start message
            bot.deleteMessage(chatId, msg.message_id).catch(error => {
                console.error("Fehler beim Löschen der Nachricht:", error.response.body);
            });

            // upon hitting /start the bot sends out a greetings message to the user..
            const greeting = texts.greeting.replace('{username}', username);
            const options = {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: texts.buttonText, callback_data: 'clicked_button' }]
                    ]
                }
            };
            sendMessageToUser(bot, chatId, greeting, options);

            // ..and a notification to the debug channel..
            const debugMsg = texts.debugMessage.replace('{username}', username);
            sendMessageToDebugChannel(bot, debugMsg);

            // ..and to the debug group
            const totalUsers = Object.keys(usersDb).length;
            const optionsForDebugGroup = {
                parse_mode: "MarkdownV2"
            };
            const debugGroupMsg = escapeMarkdownV2(texts.debugGroupMessage.replace('{username}', username).replace('{totalUsers}', totalUsers));
            sendMessageToDebugGroup(bot, debugGroupMsg, optionsForDebugGroup);
    });
}

/**
 * Function that gets activated whenever a user clicks a button from a bot message
 * @param bot TG bot object 
 */
function onButtonClick(bot) {
    bot.on('callback_query', (callbackQuery) => {
        const message = callbackQuery.message;
        const chatId = message.chat.id;
        const data = callbackQuery.data;

        if (data === 'clicked_button') {
            sendMessageToUser(bot, chatId, texts.buttonClicked);
        }
    });
}

module.exports = {
    onTextFunction: onTextFunction,
    onButtonClick: onButtonClick
};
