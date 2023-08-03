import { sendRequest } from "../../src/client-api.js";

var nmCheck = function(filePath) {
    sendRequest('nm', 'nmCheck', {
        filePath: filePath
    }, function(response) {
        document.getElementById("result").innerText = response.text;
    });
}

window.addEventListener('load', (event) => {
    console.log('nm page is fully loaded');

    document.getElementById('drop-zone').addEventListener('fileselected', (ev) => {
        console.log(ev);
        const filePath = ev.detail.file.path;
        nmCheck(filePath);
    });
});