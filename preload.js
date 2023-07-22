window.addEventListener('message', function (event) {
  // Get the sent data
  console.log("[preload.js] received data in main", event)
  const encodedMessage = event.data;
  const decodedMessage = JSON.parse(encodedMessage);

  const package = decodedMessage.package;
  const method = decodedMessage.method;
  const requestData = decodedMessage.data;

  const modulePath = './packages/' + package + '/main.js';
  console.log("[preload.js] loading module " + modulePath);
  var reqModule = require(modulePath);
  reqModule[method](requestData, function(responseData) {
    console.log("[preload.js] Received response data: ", responseData);
    var response = {
      id: decodedMessage.id,
      data: responseData
    }
    const messageStr = JSON.stringify(response);
    document.getElementById("toolframeid").contentWindow.postMessage(messageStr, '*');
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})

