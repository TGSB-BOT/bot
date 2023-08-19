import { IFunction as IFunction } from './IFunction';

/**
 * 
 * @author ozzy_trades
 * Backend Logic for the Telegram Bot which implements the IFunction 
 * 
 */

class Function implements IFunction {

    basicFunction(): void {
        console.log("Dies ist eine grundlegende Funktion.");
    }
}