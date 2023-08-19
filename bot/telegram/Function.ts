import { IFunction as IFunction } from './IFunction';
import TelegramBot from "node-telegram-bot-api";
import config, { bot_token } from "../../config.js";

/**
 * 
 * @author ozzy_trades
 * Backend Logic for the Telegram Bot which implements the IFunction 
 * 
 */

const TgBot = new TelegramBot(bot_token, { polling: true });
async function sendMessage(chatid, message, options = {}) {


class Function implements IFunction {

    startTelegram() {
        TgBot.onText(/\start/, (msg) => {
            let chatid = msg.chat.id.toString();
        sendMessage(
            chatid,
            "User "+chatid+ " send a message to the bot saying <code>"++"</<coder>",
        {
            parse_mode: "HTML",

            disable_web_page_overview: "True",
            reply_markup: {
                remove_keyboard: true,
            },
    });

    
}