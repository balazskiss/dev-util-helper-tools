window.addEventListener('message', function (event) {
  // Get the sent data
  console.log("received data in main")
  const data = event.data;
  console.log(data);
  const decoded = JSON.parse(data);
  console.log(decoded);

  const modulePath = './packages/' + decoded.package + '/main.js';
  console.log("loading module " + modulePath);
  var reqModule = require(modulePath);
  if (decoded.params) {
    const params = decoded.params;
    reqModule[decoded.method](...params);
  } else {
    reqModule[decoded.method]();
  }
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

