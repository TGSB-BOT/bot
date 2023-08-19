"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var config_json_1 = require("../../config.json");
var node_telegram_bot_api_1 = require("node-telegram-bot-api");
var bot_token = config_json_1.default.bot_token;
var debug_channel = config_json_1.default.debug_channel;
var debug_group = config_json_1.default.debug_group;
var main_channel = config_json_1.default.main_channel;
var main_debug = config_json_1.default.main_debug;
var TgBot = new node_telegram_bot_api_1.default(bot_token, { polling: true });
/**
 *
 * @author ozzy_trades
 * / Main class for the bot integration
 *
 */
var Main = /** @class */ (function () {
    function Main(obj) {
        this.functionInstance = obj;
    }
    Main.prototype.startTelegram = function () {
        this.functionInstance.startTelegram();
    };
    Main.prototype.sendMessage = function () {
        this.functionInstance.sendMessage();
    };
    return Main;
}());
exports.Main = Main;
