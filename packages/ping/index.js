var pingUrl = function(url) {
    document.getElementById("result").innerText = '';
    sendRequest('ping', 'pingUrl', {
        url: url
    }, function(response) {
    });
}

window.addEventListener('load', (event) => {
    console.log('ping page is fully loaded');

    document.getElementById('pingBtn').addEventListener('click', () => {
        const url = document.getElementById('urlInput').value;
        pingUrl(url);
    });
});

window.addEventListener('message', function (e) {
    // Get the sent data
    console.log("received data in brew tool")
    const data = e.data;
    console.log(data);
    document.getElementById("result").innerText += data.text;
  });