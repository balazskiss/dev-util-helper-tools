let nextItemID = 0;

const formatSize = function(numberOfBytes) {
    return numberOfBytes + " B"
}

const addFileListItem = function(file, parentElement) {
    console.log("Adding file", file, parentElement);
    const isDirectory = file.hasOwnProperty("files");
    const template = isDirectory ? "file-tree-dir-template" : "file-tree-file-template";
    const fileTreeItemTemplate = document.getElementById(template);
    const fileTreeItem = fileTreeItemTemplate.content.firstElementChild.cloneNode(true);
    const fileName = fileTreeItem.querySelector(".file-name");
    fileName.textContent = file.name;
    const fileSize = fileTreeItem.querySelector(".file-size");
    fileSize.textContent = formatSize(file.size);
    parentElement.appendChild(fileTreeItem);
    if (isDirectory) {
        const itemID = "item-" + nextItemID;
        nextItemID++;
        fileTreeItem.setAttribute("href", "#" + itemID)
        const dirFiles = document.getElementById("file-tree-dir-files-template").content.firstElementChild.cloneNode(true);
        dirFiles.setAttribute("id", itemID)
        parentElement.appendChild(dirFiles);
        for (const dirFile of file.files) {
            addFileListItem(dirFile, dirFiles);
        }
    }
}

const renderFileTree = function(files) {
    const fileTree = document.getElementById("file-tree");
    for (const file of files) {
        addFileListItem(file, fileTree);
    }
}

const getFileList = function(filePath) {
    sendRequest('apk-browser', 'getFileList', {
        filePath: filePath
    }, function(response) {
        renderFileTree(response);
    });
}

window.addEventListener('load', (event) => {
    document.getElementById('drop-zone').addEventListener('fileselected', (ev) => {
        console.log(ev);
        const filePath = ev.detail.file.path;
        getFileList(filePath);
    });
});