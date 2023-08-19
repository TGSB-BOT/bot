import { Main } from './bot/telegram/Main';
import { IFunction } from './bot/telegram/IFunction';



const functionImplementation: IFunction = {
    startTelegram: () => {
    },
    sendMessage: (chatid: string, message: string, options: { parse_mode: string; disable_web_page_overview: string; reply_markup: { remove_keyboard: boolean; }; }) => {
    }
};

const mainInstance = new Main(functionImplementation);
mainInstance.startTelegram();
