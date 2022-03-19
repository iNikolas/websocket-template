import writeToScreen from "./writeToScreen.js";
import init from "../init.js";
import {TIMER} from "../common/constants.js";

function tryReconnect(event) {

    if (event.code !== 1000) {
        // Error code 1000 means that the connection was closed normally.
        // Try to reconnect.

        writeToScreen('Trying to reconnect, wait...')

        TIMER.link = setTimeout(() => init(), 2000)

        if (!navigator.onLine) {
            writeToScreen("You are offline. Please connect to the Internet and try again.");
        }
    }
}

export default tryReconnect