var nmCheck = function(filePath) {
    sendRequest('nm', 'nmCheck', {
        filePath: filePath
    }, function(response) {
        document.getElementById("result").innerText = response.text;
    });
}

window.addEventListener('load', (event) => {
    console.log('nm page is fully loaded');

    document.getElementById('checkBtn').addEventListener('click', () => {
        const filePath = document.getElementById('fileInput').files[0].path;
        nmCheck(filePath);
    });
});