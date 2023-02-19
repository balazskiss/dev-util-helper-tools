window.addEventListener('load', (event) => {
    console.log('nm page is fully loaded');

    document.getElementById('checkBtn').addEventListener('click', () => {
        const filePath = document.getElementById('fileInput').files[0].path;
        const message = JSON.stringify({
            package: 'nm',
            method: 'nmCheck',
            params: [filePath]
        });
        window.parent.postMessage(message, '*');
    });
});

window.addEventListener('message', function (e) {
    // Get the sent data
    console.log("received data in brew tool")
    const data = e.data;
    console.log(data);
    document.getElementById("result").innerText = data.text;
  });