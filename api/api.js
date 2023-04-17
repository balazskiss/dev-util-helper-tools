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
    console.log(data);
});

var messageCounter = 0;
var messageQueue = {};

const postMessage = function(message, callback) {
    messageCounter += 1;
    const messageID = "message-" + messageCounter;
    const wrappedMessage = {
        id: messageID,
        data: message
    }
    messageQueue[messageID] = callback;
    console.log("Posting message: ", wrappedMessage);
    const messageStr = JSON.stringify(wrappedMessage);
    window.parent.postMessage(messageStr, '*');
}