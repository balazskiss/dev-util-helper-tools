const { runCommand } = require("../../src/server/command");

module.exports.hash = function (requestData, callback) {
  const command = "md5 -q -s \"" + requestData.str + "\"";
  runCommand(command, callback);
}