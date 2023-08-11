const { runCommand } = require("../../src/server/command");
const fs = require('fs');
const path = require('path');

function getFilesAndSizesRecursive(directoryPath) {
  return new Promise((resolve, reject) => {
    let filesList = [];

    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      let pending = files.length;
      if (pending === 0) {
        // If there are no files or directories in the current directory
        resolve(filesList);
        return;
      }

      files.forEach(file => {
        const filePath = path.join(directoryPath, file);

        fs.stat(filePath, (err, stats) => {
          if (err) {
            // Stat can return with error when the file is an alias.
            filesList.push({ name: file, size: 0 });
            pending--;
            if (pending === 0) {
              resolve(filesList);
            }
            return;
          }

          if (stats.isDirectory()) {
            // If it's a directory, recursively call the function for subdirectory
            getFilesAndSizesRecursive(filePath)
              .then(subdirFilesList => {
                const totalSize = subdirFilesList.reduce((acc, file) => acc + file.size, 0);
                filesList.push({ name: file, size: totalSize, files: subdirFilesList});
                pending--;
                if (pending === 0) {
                  resolve(filesList);
                }
              })
              .catch(reject);
          } else if (stats.isFile()) {
            // If it's a file, add file details to the list
            filesList.push({ name: file, size: stats.size });

            pending--;
            if (pending === 0) {
              resolve(filesList);
            }
          }
        });
      });
    });
  });
}

module.exports.getFileList = function (requestData, callback) {
  const filePath = requestData.filePath;
  runCommand("mktemp -d", (result) => {
    const tmpDirPath = result;
    console.log(tmpDirPath);
    runCommand(`unzip "${filePath}" -d "${tmpDirPath}"`, (result) => {
      getFilesAndSizesRecursive(tmpDirPath)
      .then(filesList => {
        console.log("done");
        console.log(filesList);
        callback(filesList);
      })
      .catch(err => {
        console.error('Error:', err);
      });
    })
  });
}