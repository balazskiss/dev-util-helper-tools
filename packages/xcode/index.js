import { sendRequest } from "../../src/client-api.js";

var getXcodeVersion = function () {
    sendRequest('xcode', 'getXcodeVersion', {}, function (response) {
        document.getElementById("version-result").innerText += response.text;
    });
}

var getXcodePath = function () {
    sendRequest('xcode', 'getXcodePath', {}, function (response) {
        document.getElementById("path-result").innerText += response.text;
    });
}

var getXcodeDerivedDataSize = function () {
    sendRequest('xcode', 'getDerivedDataSize', {}, function (response) {
        document.getElementById("derived-data-size-result").innerText += response.text;
    });
}

var removeXcodeDerivedData = function () {
    sendRequest('xcode', 'removeDerivedData', {}, function (response) {
        getXcodeDerivedDataSize();
    });
}

var getXcodeSDKs = function () {
    sendRequest('xcode', 'getXcodeSDKs', {}, function (response) {
        document.getElementById("sdks-result").innerText += response.text;
    });
}

var getXcodeInfo = function () {
    getXcodeVersion();
    getXcodePath();
    getXcodeDerivedDataSize();
    getXcodeSDKs();
}

window.addEventListener('load', (event) => {
    getXcodeInfo();

    document.getElementById('remove-derived-data-btn').addEventListener('click', () => {
        removeXcodeDerivedData();
    });
});

window.addEventListener('message', function (e) {
    const data = e.data;
    console.log("[xcode] message", data);
    if (!data || !data.text) {
        return;
    }
    document.getElementById("result").innerText += data.text;
});