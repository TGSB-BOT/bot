import { IFunction } from './IFunction';
import { Main as MainFromJS } from '../../Main';

import config from "../../config.js";
import TelegramBot from "node-telegram-bot-api";

const bot_token = config.bot_token;
const debug_channel = config.debug_channel;
const debug_group = config.debug_group;
const main_channel = config.main_channel;
const main_debug = config.main_debug;

const TgBot = new TelegramBot(bot_token, { polling: true });

/**
 * 
 * @author ozzy_trades
 * / Main class for the bot integration 
 * 
 */

class Main {
    functionInstance: IFunction;

    useFunction() {
        this.functionInstance.basicFunction();
    }
}

export { Main, MainFromJS };
