import { sendRequest } from "../../src/client-api.js";

var getWhoisInfo = function (url) {
    document.getElementById("result").innerText = '';
    sendRequest('whois', 'getWhoisInfo', {
        url: url
    }, function (response) {
    });
}

window.addEventListener('load', (event) => {
    document.getElementById('runBtn').addEventListener('click', () => {
        const url = document.getElementById('urlInput').value;
        getWhoisInfo(url);
    });
});

window.addEventListener('message', function (e) {
    const data = e.data;
    console.log("[whois] message", data);
    if (!data || !data.text) {
        return;
    }
    document.getElementById("result").innerText += data.text;
});