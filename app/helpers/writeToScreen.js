import {OUTPUT} from "../common/constants.js";

function writeToScreen(message) {
    const pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    OUTPUT.appendChild(pre);
}

export default writeToScreen