import { IFunction as IFunction } from './IFunction';
import TelegramBot from "node-telegram-bot-api";
import config, { bot_token } from "../../config.js";

/**
 * 
 * @author ozzy_trades, sportsr0bber
 * Backend Logic for the Telegram Bot which implements the IFunction 
 * 
 */

const TgBot = new TelegramBot(bot_token, { polling: true });
const parseMode = {
    parse_mode: "HTML",

    disable_web_page_overview: "True",
    reply_markup: {
        remove_keyboard: true,
    },
};


class Function implements IFunction {

    startTelegram() {
        TgBot.onText(/\start/, (msg) => {
            let chatid = msg.chat.id.toString();
        this.sendMessage(
            chatid,
            "User "+chatid+ " sent a message to the bot.", parseMode
        );
    })};

    /**
     * Sends a message to the telegram bot of user with userID and default formatting
     * @param chatid the telegram id of the user
     * @param message the message
     * @param options the formatting options of the message
     */
    sendMessage(chatid, message, options = {}){
        TgBot.sendMessage(chatid, message, options);
    }

}