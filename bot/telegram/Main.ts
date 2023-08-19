import { IFunction } from './IFunction';
import { Main as MainFromJS } from '../../Main';

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
