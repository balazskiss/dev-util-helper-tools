import { sendRequest } from "../../src/client-api.js";

var pingUrl = function(url) {
    document.getElementById("result").innerText = '';
    sendRequest('ping', 'pingUrl', {
        url: url
    }, function(response) {
    });
}

window.addEventListener('load', (event) => {
    console.log('[ping] ping page is fully loaded');

    document.getElementById('pingBtn').addEventListener('click', () => {
        const url = document.getElementById('urlInput').value;
        pingUrl(url);
    });
});

window.addEventListener('message', function (e) {
    const data = e.data;
    console.log("[ping] message ", data);
    if (!data || !data.text) {
        return;
    }
    document.getElementById("result").innerText += data.text;
  });