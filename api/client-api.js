window.addEventListener('load', (event) => {
    console.log('[client-api] Tool API loaded');

    // This event handler is needed to enable drop-zone events.
    document.body.addEventListener("dragover", evt => {
        evt.preventDefault();
    });
})

window.addEventListener('message', function (event) {
    // Get the sent data
    console.log("[client-api] received data", event)
    const data = event.data;
    const decodedMessage = JSON.parse(data);
    const messageID = decodedMessage.id;
    const callback = messageQueue[messageID];
    callback(decodedMessage.data);
});

var messageCounter = 0;
var messageQueue = {};

const postMessage = function (data, callback) {
    messageCounter += 1;
    const messageID = "message-" + messageCounter;
    let message = data;
    message.id = messageID;
    messageQueue[messageID] = callback;
    console.log("[client-api] Posting message: ", message);
    const messageStr = JSON.stringify(message);
    window.parent.postMessage(messageStr, '*');
}

const sendRequest = function (package, method, data, callback) {
    const message = {
        package: package,
        method: method,
        data: data
    }
    postMessage(message, callback);
}


class FileDropZone extends HTMLElement {
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