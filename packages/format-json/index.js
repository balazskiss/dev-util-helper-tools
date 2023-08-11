const minifyJSON = function (json) {
    return JSON.stringify(JSON.parse(json));
}

const convertSpacesToHTMLSpaces = function (str) {
    return str.replace(/ /g, '&nbsp;')
}

const convertNewLinesToHTMLNewLines = function (str) {
    return str.replace(/\n/g, '<br/>')
}

const convertStringToHTML = function (str) {
    return convertNewLinesToHTMLNewLines(convertSpacesToHTMLSpaces(str));
}

const prettifyJSON = function (json) {
    return JSON.stringify(JSON.parse(json), null, 2);
}

window.addEventListener('load', (event) => {
    console.log('ping page is fully loaded');

    document.getElementById('prettifyBtn').addEventListener('click', () => {
        const inputStr = document.getElementById('inputString').value;
        const prettifiedJSON = prettifyJSON(inputStr);
        const prettifiedJSONHTML = convertStringToHTML(prettifiedJSON);
        document.getElementById("result").innerHTML = prettifiedJSONHTML;
    });

    document.getElementById('minifyBtn').addEventListener('click', () => {
        const inputStr = document.getElementById('inputString').value;
        const minifiedJSON = minifyJSON(inputStr);
        const minifiedJSONHTML = convertStringToHTML(minifiedJSON);
        document.getElementById("result").innerHTML = minifiedJSONHTML;
    });
});