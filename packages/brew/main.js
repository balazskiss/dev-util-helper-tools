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
        packages.push({
          name: fields[0],
          version: fields[1]
        })
      })

      callback({packages: packages});
  });
}