import writeToScreen from "../helpers/writeToScreen.js";
import doSend from "../helpers/doSend.js";

function onOpen(evt) {
    writeToScreen("CONNECTED");
    doSend("WebSocket rocks", evt.target);
}

export default onOpen