import { IFunction } from './IFunction';
import TelegramBot from "node-telegram-bot-api";

import config from "../../config.json";
const bot_token = config.bot_token;
const debug_channel = config.debug_channel;
const debug_group = config.debug_group;
const main_channel = config.main_channel;
const main_debug = config.main_debug;

/**
 * 
 * @author ozzy_trades, r0bster97
 * Backend Logic for the Telegram Bot which implements the IFunction 
 * 
 */

const TgBot = new TelegramBot(bot_token, { polling: true });

class Function {

    /**
     * initial function to start the telegram bot when a user hits the START button in the bot
     */
    startTelegram() {
        TgBot.onText(/\start/, (msg) => {
            let chatid = msg.chat.id.toString();
            this.sendMessage(
                chatid,
                "User " + chatid + " sent a message to the bot."
            );
        });
    }

    /**
     * Sends a message to the telegram bot of user with userID and default formatting
     * @param chatid the telegram id of the user
     * @param message the message
     */
    sendMessage(chatid: string, message: string) {
        TgBot.sendMessage(chatid, message, {
            parse_mode: "HTML",
            disable_web_page_preview: true,
            reply_markup: {
                remove_keyboard: true,
            },
        });
    }

}


export { Function };