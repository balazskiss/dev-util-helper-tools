import { formatSize } from '../utils/FormatSize.js';

export class FileTree extends HTMLElement {

    nextItemID = 0;

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../../libs/bootstrap/css/bootstrap.min.css">
            <script src="../../libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        `;

        this.topLevelList = document.createElement('ul');
        this.topLevelList.classList.add('list-group');
        shadow.appendChild(this.topLevelList);
    }

    connectedCallback() {
        console.log('[FileTree] connectedCallback');
    }

    disconnectedCallback() {
        console.log('[FileTree] disconnectedCallback');
    }

    getNextItemID() {
        const itemID = "file-tree-item-" + this.nextItemID;
        this.nextItemID++;
        return itemID;
    }

    createFileItem() {
        const item = document.createElement('li');
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        const fileNameSpan = document.createElement('span');
        fileNameSpan.classList.add('file-name');
        fileNameSpan.textContent = 'File name';
        item.appendChild(fileNameSpan);
        const fileSizeSpan = document.createElement('span');
        fileSizeSpan.classList.add('file-size');
        fileSizeSpan.textContent = 'File size';
        item.appendChild(fileSizeSpan);
        return item;
    }

    createDirectoryItem() {
        const item = document.createElement('a');
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.setAttribute("data-bs-toggle", "collapse");
        const fileNameElement = document.createElement('span');
        fileNameElement.classList.add('file-name');
        fileNameElement.textContent = 'Directory name';
        const boldFileName = document.createElement('b');
        boldFileName.appendChild(fileNameElement);
        item.appendChild(boldFileName);
        const fileSizeElement = document.createElement('span');
        fileSizeElement.classList.add('file-size');
        fileSizeElement.textContent = 'Directory size';
        item.appendChild(fileSizeElement);
        return item;
    }

    createSubdirectoryContainer() {
        const container = document.createElement('ul');
        container.classList.add('dir-files', 'list-group', 'collapse');
        container.style.paddingLeft = '20px';
        return container;
    }

    addFileListItem(fileObject, parentElement) {
        console.log("Adding file", fileObject, parentElement);
        const isDirectory = fileObject.hasOwnProperty("files");
        const fileTreeItemElement = isDirectory ? this.createDirectoryItem() : this.createFileItem();
        const fileNameElement = fileTreeItemElement.querySelector(".file-name");
        fileNameElement.textContent = fileObject.name;
        const fileSizeElement = fileTreeItemElement.querySelector(".file-size");
        fileSizeElement.textContent = formatSize(fileObject.size);
        parentElement.appendChild(fileTreeItemElement);
        if (isDirectory) {
            const itemID = this.getNextItemID();
            fileTreeItemElement.setAttribute("href", "#" + itemID);
            const subdirectoryElement = this.createSubdirectoryContainer();
            subdirectoryElement.setAttribute("id", itemID)
            parentElement.appendChild(subdirectoryElement);
            for (const dirFile of fileObject.files) {
                this.addFileListItem(dirFile, subdirectoryElement);
            }

            fileTreeItemElement.addEventListener('click', (event) => {
                console.log('[FileTree] Directory clicked', event);
                console.log(subdirectoryElement);
                const itemCollapsible = new bootstrap.Collapse(subdirectoryElement);
                itemCollapsible.toggle();
                event.preventDefault();
            });
        }
    }

    renderFileTree(files) {
        console.log('[FileTree] renderFileTree', files);
        for (const file of files) {
            this.addFileListItem(file, this.topLevelList);
        }
    }
}

customElements.define('file-tree', FileTree);