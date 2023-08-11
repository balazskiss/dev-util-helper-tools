export class FileDropZone extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const styles = `
            :host {
                display: block;
                background-color: #eee;
                border: 3px dashed #aaa;
                border-radius: 20px;
                padding: 10px;
            }
        `;
        const styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(styles);
        shadow.adoptedStyleSheets = [styleSheet];

        const text = document.createElement("p");
        text.innerHTML = "Drag one or more files to this <i>drop zone</i>."
        shadow.appendChild(text);

        const input = document.createElement('input');
        input.type = 'file';
        shadow.appendChild(input);

        this.addEventListener('click', (ev) => {
            console.log('[client-api] click');
            input.click();
        });

        this.addEventListener('drop', (event) => {
            console.log('[client-api] File(s) dropped', event);
            // Prevent default behavior (Prevent file from being opened)
            event.preventDefault();
            console.log(event.dataTransfer.files.length);
            console.log(event.dataTransfer.files[0]);

            const file = event.dataTransfer.files[0];
            const customEvent = new CustomEvent('fileselected', { detail: { file } });
            this.dispatchEvent(customEvent);
        });

        this.addEventListener("dragstart", (event) => {
            console.log('[client-api] dragstart');
        });

        this.addEventListener('dragOver', (event) => {
            console.log('[client-api] File(s) in drop zone');
            // Prevent default behavior (Prevent file from being opened)
            event.preventDefault();
        });

        input.addEventListener('change', (event) => {
            event.preventDefault();
            const file = input.files[0];
            console.log('[client-api] Selected file:', file);
            const customEvent = new CustomEvent('fileselected', { detail: { file } });
            this.dispatchEvent(customEvent);
        });
    }
}

customElements.define('file-drop-zone', FileDropZone);