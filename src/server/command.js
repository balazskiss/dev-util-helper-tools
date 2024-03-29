const { exec } = require("child_process");

module.exports.runCommand = function(command, callback) {
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