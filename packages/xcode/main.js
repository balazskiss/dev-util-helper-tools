const { runCommand } = require("../../src/server/command");

module.exports.getXcodePath = function(requestData, callback) {
    const command = "xcode-select --print-path";
    runCommand(command, callback);
}

module.exports.getXcodeVersion = function(requestData, callback) {
    const command = "xcodebuild -version";
    runCommand(command, callback);
}

module.exports.getXcodeSDKs = function(requestData, callback) {
    const command = "xcodebuild -showsdks -json";
    runCommand(command, callback);
}

module.exports.getDerivedDataSize = function(requestData, callback) {
    const command = "du -hs ~/Library/Developer/Xcode/DerivedData |  awk '{ print $1 }'";
    runCommand(command, callback);
}

module.exports.removeDerivedData = function(requestData, callback) {
    const command = "rm -rf ~/Library/Developer/Xcode/DerivedData";
    runCommand(command, callback);
}