
import { Function } from './Function';

const funcClass = new Function();

/**
 * 
 * @author ozzy_trades, r0bster97
 * / Main class for the bot integration 
 * 
 */


class Main {

    startTelegram() {
        funcClass.startTelegram();
    }

    sendMessage(chatid, message) {
        funcClass.sendMessage(chatid, message);
    }
}


export { Main };
