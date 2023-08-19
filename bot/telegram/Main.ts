import { IFunction } from './IFunction';

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

export default Main;
