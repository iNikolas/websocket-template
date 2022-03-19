import writeToScreen from "./writeToScreen.js";

function doSend(message, websocket) {
    writeToScreen("SENT: " + message);
    websocket.send(message);
}

export default doSend