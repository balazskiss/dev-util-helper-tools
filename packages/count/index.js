function countWords(inputString) {
    const trimmedString = inputString.trim();
    const wordsArray = trimmedString.split(/\s+/);
    const nonEmptyWordsArray = wordsArray.filter(word => word !== '');
    return nonEmptyWordsArray.length;
}

function countSentences(inputString) {
    const sentencesArray = inputString.split(/[.!?]\s|[$.!?]$/);
    const nonEmptySentencesArray = sentencesArray.filter(sentence => sentence.trim() !== '');
    return nonEmptySentencesArray.length;
}

function countLines(inputString) {
    const linesArray = inputString.split('\n');
    const nonEmptyLinesArray = linesArray.filter(line => line.trim() !== '');
    return nonEmptyLinesArray.length;
}

function count(textInput) {
    let result = {};
    result.characters = textInput.length;
    result.words = countWords(textInput);
    result.sentences = countSentences(textInput);
    result.lines = countLines(textInput);
    return result;
}

window.addEventListener('load', (event) => {
    document.getElementById('actionBtn').addEventListener('click', (event) => {
        const textInput = document.getElementById('textInput').value;
        const result = count(textInput);
        document.getElementById("character-count").innerText = result.characters;
        document.getElementById("word-count").innerText = result.words;
        document.getElementById("sentence-count").innerText = result.sentences;
        document.getElementById("line-count").innerText = result.lines;
        event.preventDefault();
    });

    document.getElementById('drop-zone').addEventListener('fileselected', (ev) => {
        console.log(ev);
        const filePath = ev.detail.file.path;
        
    });
});