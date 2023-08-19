import { Main, MainFromJS } from './bot/telegram';


const config = require("./config");
const TelegramBot = require("node-telegram-bot-api");

const bot_token = config.bot_token;
const debug_channel = config.debug_channel;
const debug_group = config.debug_group;
const main_channel = config.main_channel;
const main_debug = config.main_debug;

const TgBot = new TelegramBot(bot_token, { polling: true });


export { Main };