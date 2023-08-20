/**
 * 
 * @author ozzy_trades, r0bster97
 * this interface implements the functions of the function.js file, in which the functionalities
 * and backend logic is stored for the Telegram bot. 
 * 
 */

export interface IFunction {

     /**
     * Start of the Telegram Bot via IFunction
     */
    startTelegram(): void;
    /**
     * SendMessage Function which sends a initial message
     */
    sendMessage(chatid: string, message: string): void;
    
}

