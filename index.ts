import { Main } from './bot/telegram/Main';

const functionImplementation: IFunction = {
    startTelegram: () => {
        // Implementierung der startTelegram-Funktion
    },
    sendMessage: (chatid: string, message: string, options: { parse_mode: string; disable_web_page_overview: string; reply_markup: { remove_keyboard: boolean; }; }) => {
        // Implementierung der sendMessage-Funktion
    }
};

const mainInstance = new Main(functionImplementation);
mainInstance.startTelegram();
