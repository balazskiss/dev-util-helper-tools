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
      callback(stdout)
  });
}

module.exports.getFileList = function (requestData, callback) {
  const filePath = requestData.filePath;
  runCommand("mktemp -d", (result) => {
    const tmpDirPath = result;
    console.log(tmpDirPath);
    runCommand(`unzip "${filePath}" -d "${tmpDirPath}"`, (result) => {
      runCommand(`ls -laR "${tmpDirPath}"`, (result) => {
        callback({text: result})
      })
    })
  });
}