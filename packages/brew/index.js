var btPress = function() {
    const message = JSON.stringify({
        message: 'Hello from iframe',
        date: Date.now(),
        package: 'brew',
        method: 'brewListPackages'
    });
    window.parent.postMessage(message, '*');
}

window.addEventListener('message', function (e) {
    // Get the sent data
    console.log("received data in brew tool")
    const data = e.data;
    console.log(data);
    document.getElementById("result").innerText = data.text;
  });


window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

    document.getElementById('brewListPackages').addEventListener('click', () => {
        btPress();
    });
});