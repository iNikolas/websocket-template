import writeToScreen from "../helpers/writeToScreen.js";

function onMessage({data: message}) {
    if (typeof message === 'string') writeToScreen('<span style = "color: palegreen;">MESSAGE:</span> ' + message)
}

export default onMessage