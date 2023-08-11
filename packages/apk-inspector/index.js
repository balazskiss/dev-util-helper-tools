import { sendRequest } from "../../src/client-api.js";

const renderFileTree = function(files) {
    document.getElementById('custom-file-tree').renderFileTree(files);
}

const getFileList = function(filePath) {
    sendRequest('apk-inspector', 'getFileList', {
        filePath: filePath
    }, function(response) {
        renderFileTree(response);
    });
}

window.addEventListener('load', (event) => {
    document.getElementById('drop-zone').addEventListener('fileselected', (ev) => {
        console.log(ev);
        const filePath = ev.detail.file.path;
        getFileList(filePath);
    });
});