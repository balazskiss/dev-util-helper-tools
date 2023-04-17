const { spawn } = require("child_process");

module.exports.pingUrl = function(requestData, callback) {
    const ls = spawn("ping", ["-c10", requestData.url]);
    callback({});
    ls.stdout.on("data", data => {
        const op = `stdout: ${data}`;
        console.log(`stdout: ${data}`);
        const resp = {
            text: op
          };
        document.getElementById("toolframeid").contentWindow.postMessage(resp, '*');
    });
    ls.stderr.on("data", data => {
        console.log(`stderr: ${data}`);
    });
    ls.on('error', (error) => {
        console.log(`error: ${error.message}`);
    });
    ls.on("close", code => {
        console.log(`child process exited with code ${code}`);
    });
}