var lipoCheck = function(filePath) {
    sendRequest('lipo', 'lipoCheck', {
        filePath: filePath
    }, function(response) {
        document.getElementById("result").innerText = response.text;
    });
}

window.addEventListener('load', (event) => {
    console.log('lipo page is fully loaded');

    document.getElementById('checkBtn').addEventListener('click', () => {
        const filePath = document.getElementById('fileInput').files[0].path;
        lipoCheck(filePath);
    });

    document.getElementById('drop-zone').addEventListener('click', (ev) => {
        console.log('click');
    });

    document.getElementById('drop-zone').addEventListener('drop', (event) => {
        console.log('File(s) dropped');
        // Prevent default behavior (Prevent file from being opened)
        event.preventDefault();
        console.log(event);
        console.log(event.dataTransfer.files.length);
        console.log(event.dataTransfer.files[0]);

        const filePath = event.dataTransfer.files[0].path;
        lipoCheck(filePath);
    });

    document.getElementById('drop-zone').addEventListener('dragOver', (ev) => {
        console.log('File(s) in drop zone');
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
    });
});