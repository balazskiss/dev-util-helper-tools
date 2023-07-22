const { exec } = require("child_process");

runCommand = function(command, callback) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        callback({
          text: stdout
        })
    });
}

module.exports.getXcodeSimulators = function(requestData, callback) {
    const command = "xcrun simctl list -je";
    runCommand(command, callback);
}
