import { sendRequest } from "../../src/client-api.js";

var lipoCheck = function(filePath) {
    sendRequest('lipo', 'lipoCheck', {
        filePath: filePath
    }, function(response) {
        document.getElementById("result").innerText = response.text;
    });
}

window.addEventListener('load', (event) => {
    console.log('lipo page is fully loaded');

    document.getElementById('drop-zone').addEventListener('fileselected', (ev) => {
        console.log(ev);
        const filePath = ev.detail.file.path;
        lipoCheck(filePath);
    });
});