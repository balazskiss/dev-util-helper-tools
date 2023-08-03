import { sendRequest } from "../../src/client-api.js";

var getXcodeSimulators = function () {
    sendRequest('xcode-simulators', 'getXcodeSimulators', {}, function (response) {
        document.getElementById("simulators-result").innerText += response.text;
    });
}

var getXcodeInfo = function () {
    getXcodeSimulators();
}

window.addEventListener('load', (event) => {
    getXcodeInfo();
});

window.addEventListener('message', function (e) {
    const data = e.data;
    console.log("[xcode-simulators] message", data);
    if (!data || !data.text) {
        return;
    }
    document.getElementById("result").innerText += data.text;
});