function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateStrings(numberOfStrings, numberOfCharacters) {
    let result = "";
    for(let i = 0; i < numberOfStrings; i++) {
        let str = generateRandomString(numberOfCharacters);
        result += str + "\n";
    }
    return result;
}

const generateBtn = function(numberOfCharacters, numberOfStrings) {
    document.getElementById("result").innerText = '';
    let result = generateStrings(numberOfStrings, numberOfCharacters);
    document.getElementById("result").innerText = result;
}

window.addEventListener('load', (event) => {
    console.log('random-string page is fully loaded');

    document.getElementById('generateBtn').addEventListener('click', () => {
        const numberOfCharacters = document.getElementById('numberOfCharacters').value;
        const numberOfStrings = document.getElementById('numberOfStrings').value;
        generateBtn(numberOfCharacters, numberOfStrings);
    });
});