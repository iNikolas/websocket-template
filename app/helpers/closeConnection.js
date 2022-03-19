import {CLOSE_BTN, SEND_MSG_BTN, TIMER} from "../common/constants.js";
import init from "../init.js";

function closeConnection(websocket) {
    if (websocket.readyState) websocket.close(1000)

    clearTimeout(TIMER.link)

    CLOSE_BTN.innerText = 'Open Connection'
    CLOSE_BTN.onclick = init
    SEND_MSG_BTN.onclick = null
}

export default closeConnection