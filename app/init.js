import onOpen from "./events/onOpen.js";
import onError from "./events/onError.js";
import onClose from "./events/onClose.js";
import onMessage from "./events/onMessage.js";
import {CLOSE_BTN, INPUT, SEND_MSG_BTN, WS_URI} from "./common/constants.js";
import closeConnection from "./helpers/closeConnection.js";
import doSend from "./helpers/doSend.js";

function init() {
    const websocket = new WebSocket(WS_URI);

    CLOSE_BTN.onclick = () => closeConnection(websocket)
    SEND_MSG_BTN.onclick = () => INPUT.value && doSend(INPUT.value, websocket)
    CLOSE_BTN.innerText = 'Close Connection'
    SEND_MSG_BTN.innerText = 'Send Message'

    websocket.onopen = onOpen
    websocket.onerror = onError
    websocket.onclose = onClose
    websocket.onmessage = onMessage
}

export default init