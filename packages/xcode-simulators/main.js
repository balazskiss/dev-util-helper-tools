const { runCommand } = require("../../src/server/command");

module.exports.getXcodeSimulators = function(requestData, callback) {
    const command = "xcrun simctl list -je";
    runCommand(command, callback);
}
