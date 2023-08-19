"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const config_json_1 = __importDefault(require("../../config.json"));
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const bot_token = config_json_1.default.bot_token;
const debug_channel = config_json_1.default.debug_channel;
const debug_group = config_json_1.default.debug_group;
const main_channel = config_json_1.default.main_channel;
const main_debug = config_json_1.default.main_debug;
const TgBot = new node_telegram_bot_api_1.default(bot_token, { polling: true });
/**
 *
 * @author ozzy_trades
 * / Main class for the bot integration
 *
 */
class Main {
    constructor(obj) {
        this.functionInstance = obj;
    }
    startTelegram() {
        this.functionInstance.startTelegram();
    }
}
exports.Main = Main;
