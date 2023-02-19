const { exec } = require("child_process");

module.exports.lipoCheck = function(path) {
    exec("lipo -info " + path, (error, stdout, stderr) => {
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