const { exec } = require("child_process");

module.exports.brewListPackages = function(requestData, callback) {
    exec("brew list --versions", (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
      }
      console.log(`stdout: ${stdout}`);

      let packages = [];
      const lines = stdout.split("\n");
      lines.forEach(function(value) {
        let fields = value.split(" ");
        if (fields.length != 2) {
          return;
        }
        packages.push({
          name: fields[0],
          version: fields[1]
        })
      })

      callback({packages: packages});
  });
}

module.exports.getPackageInfo = function(requestData, callback) {
  const packageName = requestData.packageName;
  const command = "brew info " + packageName;
  exec(command, (error, stdout, stderr) => {
    console.log(`error: ${error}`);
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    callback({packageInfo: stdout});
  })
}