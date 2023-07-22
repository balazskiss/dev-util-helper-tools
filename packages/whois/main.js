const { spawn } = require("child_process");

module.exports.getWhoisInfo = function(requestData, callback) {
    const ls = spawn("whois", [requestData.url]);
    callback({});
    ls.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
        const op = `stdout: ${data}`;
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