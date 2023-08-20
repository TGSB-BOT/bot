const config = require('../../config.json');

/**
 * @author r0bster97
 * Class that contains helper functions for the telegram bot logic
 */

/**
 * 
 * @param text 
 * @returns text but with "disabled" MarkdownV2 formatting for the given array of symbols
 */
function escapeMarkdownV2(text) {
    const reservedCharacters = ['_', '*', '[', ']', '(', ')', '~', '>', '#', '+', '-', '=', '|', '{', '}', '.', '!', '\\'];
    return text.split('').map(character => {
        if (reservedCharacters.includes(character)) {
            return '\\' + character;
        }
        return character;
    }).join('');
}

/**
 * 
 * @param bot object of the TG bot
 * @param chatId chat id for the personal use of the bot of a specific user
 * @param message message string that the script should send out
 * @param options formatting options, optional
 */
function sendMessageToUser(bot, chatId, message, options = {}) {
    bot.sendMessage(chatId, message, options);
}
function sendMessageToDebugChannel(bot, message, options = {}) {
    bot.sendMessage(config.debug_channel, message, options);
}
function sendMessageToDebugGroup(bot, message, options = {}) {
    bot.sendMessage(config.debug_group, message, options);
}
function sendMessageToMainChannel(bot, message, options = {}) {
    bot.sendMessage(config.main_channel, message, options);
}
function sendMessageToMainGroup(bot, message, options = {}) {
    bot.sendMessage(config.main_group, message, options);
}

module.exports = {
    escapeMarkdownV2,
    sendMessageToUser,
    sendMessageToDebugChannel,
    sendMessageToDebugGroup,
    sendMessageToMainChannel,
    sendMessageToMainGroup
};