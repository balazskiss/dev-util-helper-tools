module.exports = {
    sendResponse: function (data) {
        document.getElementById("toolframeid").contentWindow.postMessage(resp, '*');
    },
};