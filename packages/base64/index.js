import { sendRequest } from "../../src/client-api.js";

var encode = function(str) {
    document.getElementById("result").innerText = '';
    sendRequest('base64', 'encode', {
        str: str
    }, function(response) {
        document.getElementById("result").innerText = response;
    });
}

window.addEventListener('load', (event) => {
    console.log('ping page is fully loaded');

    document.getElementById('encodeBtn').addEventListener('click', () => {
        const inputStr = document.getElementById('inputString').value;
        encode(inputStr);
    });
});