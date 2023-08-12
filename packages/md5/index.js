import { sendRequest } from "../../src/client-api.js";

var hashMD5 = function(str) {
    document.getElementById("result").innerText = '';
    sendRequest('md5', 'hash', {
        str: str
    }, function(response) {
        document.getElementById("result").innerText = response.text;
    });
}

window.addEventListener('load', (event) => {
    console.log('md5 page is fully loaded');

    document.getElementById('encodeBtn').addEventListener('click', () => {
        const inputStr = document.getElementById('inputString').value;
        hashMD5(inputStr);
    });
});