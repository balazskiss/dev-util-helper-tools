var generateBtn = function(numberOfCharacters, numberOfStrings) {
    document.getElementById("result").innerText = '';
    sendRequest('random-string', 'generateString', {
        numberOfCharacters: numberOfCharacters,
        numberOfStrings: numberOfStrings
    }, function(response) {
        document.getElementById("result").innerText = response;
    });
}

window.addEventListener('load', (event) => {
    console.log('ping page is fully loaded');

    document.getElementById('generateBtn').addEventListener('click', () => {
        const numberOfCharacters = document.getElementById('numberOfCharacters').value;
        const numberOfStrings = document.getElementById('numberOfStrings').value;
        generateBtn(numberOfCharacters, numberOfStrings);
    });
});