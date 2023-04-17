const { exec } = require("child_process");

module.exports.nmCheck = function(requestData, callback) {
    exec("nm " + requestData.filePath, (error, stdout, stderr) => {
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