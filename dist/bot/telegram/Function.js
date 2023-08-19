"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const config_json_1 = require("../../config.json");
/**
 *
 * @author ozzy_trades, sportsr0bber
 * Backend Logic for the Telegram Bot which implements the IFunction
 *
 */
const TgBot = new node_telegram_bot_api_1.default(config_json_1.bot_token, { polling: true });
class Function {
    /**
     * initial function to start the telegram bot when a user hits the START button in the bot
     */
    startTelegram() {
        TgBot.onText(/\start/, (msg) => {
            let chatid = msg.chat.id.toString();
            this.sendMessage(chatid, "User " + chatid + " sent a message to the bot.");
        });
    }
    ;
    /**
     * Sends a message to the telegram bot of user with userID and default formatting
     * @param chatid the telegram id of the user
     * @param message the message
     */
    sendMessage(chatid, message) {
        TgBot.sendMessage(chatid, message, {
            parse_mode: "HTML",
            disable_web_page_preview: true,
            reply_markup: {
                remove_keyboard: true,
            },
        });
    }
}
