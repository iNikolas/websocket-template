import writeToScreen from "../helpers/writeToScreen.js";

function onError(evt) {
    writeToScreen('<span style = "color: red;">ERROR:</span> ' + evt.type);
}

export default onError