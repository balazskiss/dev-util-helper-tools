var lipoCheck = function(filePath) {
    sendRequest('apk-browser', 'getFileList', {
        filePath: filePath
    }, function(response) {
        document.getElementById("result").innerText = response.text;
    });
}

window.addEventListener('load', (event) => {
    document.getElementById('drop-zone').addEventListener('fileselected', (ev) => {
        console.log(ev);
        const filePath = ev.detail.file.path;
        lipoCheck(filePath);
    });
});