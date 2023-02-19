window.addEventListener('load', (event) => {
    console.log('ping page is fully loaded');

    document.getElementById('pingBtn').addEventListener('click', () => {
        const url = document.getElementById('urlInput').value;
        const message = JSON.stringify({
            package: 'ping',
            method: 'pingUrl',
            params: [url]
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