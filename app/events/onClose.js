import writeToScreen from "../helpers/writeToScreen.js";
import tryReconnect from "../helpers/tryReconnect.js";

function onClose(evt) {

    writeToScreen("DISCONNECTED");

    tryReconnect(evt)
}

export default onClose