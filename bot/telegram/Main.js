const TelegramBot = require('node-telegram-bot-api');
const { onTextFunction, onButtonClick } = require('./Function');

/**
 * @author r0bster97
 * Class that creates the telegram bot api object and uses the functions defined in ./Function
 */

class TelegramMain {
    constructor(token) {
        this.bot = new TelegramBot(token, {polling: true});
        onTextFunction(this.bot);
        onButtonClick(this.bot);
    }
}

module.exports = TelegramMain;
