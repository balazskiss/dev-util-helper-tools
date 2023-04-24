var generateBtn = function(numberOfCharacters) {
    document.getElementById("result").innerText = '';
    sendRequest('random-string', 'generateString', {
        numberOfCharacters: numberOfCharacters
    }, function(response) {
        document.getElementById("result").innerText = response;
    });
}

window.addEventListener('load', (event) => {
    console.log('ping page is fully loaded');

    document.getElementById('generateBtn').addEventListener('click', () => {
        const numberOfCharacters = document.getElementById('numberOfCharacters').value;
        generateBtn(numberOfCharacters);
    });
});