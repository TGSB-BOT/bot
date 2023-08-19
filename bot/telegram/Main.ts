import { IFunction } from './IFunction';

import config from "../../config.json";
import TelegramBot = require("node-telegram-bot-api");


const bot_token = config.bot_token;
const debug_channel = config.debug_channel;
const debug_group = config.debug_group;
const main_channel = config.main_channel;
const main_debug = config.main_debug;

const TgBot = new TelegramBot(bot_token, { polling: true });

const options = {
    parse_mode: "HTML",
    disable_web_page_overview: "true",
    reply_markup: {
        remove_keyboard: true
    }
};

/**
 * 
 * @author ozzy_trades
 * / Main class for the bot integration 
 * 
 */


class Main {
    private functionInstance: IFunction;

    constructor(functionInstance: IFunction) {
        this.functionInstance = functionInstance;
    }

    

    startTelegram() {
        this.functionInstance.startTelegram();
    }

    sendMessage(chatid: string, message: string) {
        this.functionInstance.sendMessage(chatid, message, options);
    }
}


export { Main };
