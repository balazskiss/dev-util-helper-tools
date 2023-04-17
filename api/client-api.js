window.addEventListener('load', (event) => {
    console.log('Tool API loaded');

    // This event handler is needed to enable drop-zone events.
    document.body.addEventListener("dragover", evt => {
        evt.preventDefault();
    });


})

window.addEventListener('message', function (event) {
    // Get the sent data
    console.log("received data")
    const data = event.data;
    const decodedMessage = JSON.parse(data);
    const messageID = decodedMessage.id;
    console.log(data);
    console.log(messageQueue);
    console.log(decodedMessage);
    const callback = messageQueue[messageID];
    callback(decodedMessage.data);
});

var messageCounter = 0;
var messageQueue = {};

const postMessage = function(data, callback) {
    messageCounter += 1;
    const messageID = "message-" + messageCounter;
    let message = data;
    message.id = messageID;
    messageQueue[messageID] = callback;
    console.log("Posting message: ", message);
    const messageStr = JSON.stringify(message);
    window.parent.postMessage(messageStr, '*');
}

const sendRequest = function(package, method, data, callback) {
    const message = {
        package: package,
        method: method,
        data: data
    }
    postMessage(message, callback);
}