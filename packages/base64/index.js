const encodeBase64 = function(str) {
    const encodedString = btoa(str);
    return encodedString;
};

const decodeBase64 = function(str) {
    const decodedString = atob(str);
    return decodedString;
};

window.addEventListener('load', (event) => {
    console.log('base64 page is fully loaded');

    document.getElementById('encodeBtn').addEventListener('click', () => {
        const inputStr = document.getElementById('inputString').value;
        document.getElementById("result").innerText = encodeBase64(inputStr);
    });

    document.getElementById('decodeBtn').addEventListener('click', () => {
        const inputStr = document.getElementById('inputString').value;
        document.getElementById("result").innerText = decodeBase64(inputStr);
    });
});