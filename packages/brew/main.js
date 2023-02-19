const { exec } = require("child_process");

module.exports.brewListPackages = function() {
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
  
      const resp = {
        text: stdout
      };
      document.getElementById("toolframeid").contentWindow.postMessage(resp, '*');
  });
}