const { exec } = require("child_process");

module.exports.lipoCheck = function(requestData, callback) {
    exec("lipo -info \"" + requestData.filePath + "\"", (error, stdout, stderr) => {
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