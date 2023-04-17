window.addEventListener('message', function (event) {
  // Get the sent data
  console.log("received data in main")
  const encodedMessage = event.data;
  console.log(encodedMessage);
  const decodedMessage = JSON.parse(encodedMessage);
  console.log(decodedMessage);

  const package = decodedMessage.package;
  const method = decodedMessage.method;
  const requestData = decodedMessage.data;

  const modulePath = './packages/' + package + '/main.js';
  console.log("loading module " + modulePath);
  var reqModule = require(modulePath);
  reqModule[method](requestData, function(responseData) {
    console.log("Received response data: ", responseData);
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

