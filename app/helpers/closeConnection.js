import {CLOSE_BTN, TIMER} from "../common/constants.js";
import init from "../init.js";

function closeConnection(websocket) {
    if (websocket.readyState) websocket.close(1000)

    clearTimeout(TIMER.link)

    CLOSE_BTN.innerText = 'Open Connection'
    CLOSE_BTN.onclick = init
}

export default closeConnection