const convertDecimalToBinary = (decimal) => {
    return decimal.toString(2);
};

const convertDecimalToOctal = (decimal) => {
    return decimal.toString(8);
};

const convertDecimalToHex = (decimal) => {
    return decimal.toString(16);
};

const convertBinaryToDecimal = (binary) => {
    return parseInt(binary, 2);
};

const convertOctalToDecimal = (octal) => {
    return parseInt(octal, 8);
};

const convertHexToDecimal = (hex) => {
    return parseInt(hex, 16);
};

const updateTextFields = (decimal) => {
    if (isNaN(decimal)) {
        document.getElementById('base2').value = '';
        document.getElementById('base8').value = '';
        document.getElementById('base10').value = '';
        document.getElementById('base16').value = '';
        return;
    }
    const base2 = convertDecimalToBinary(decimal);
    const base8 = convertDecimalToOctal(decimal);
    const base16 = convertDecimalToHex(decimal);
    document.getElementById('base2').value = base2;
    document.getElementById('base8').value = base8;
    document.getElementById('base10').value = decimal;
    document.getElementById('base16').value = base16;
}

window.addEventListener('load', (event) => {
    console.log('random-string page is fully loaded');

    document.getElementById('base2').addEventListener('change', () => {
        const base2 = document.getElementById('base2').value;
        const decimal = convertBinaryToDecimal(base2);
        updateTextFields(decimal);
    });

    document.getElementById('base8').addEventListener('change', () => {
        const base8 = document.getElementById('base8').value;
        const decimal = convertOctalToDecimal(base8);
        updateTextFields(decimal);
    });

    document.getElementById('base10').addEventListener('keyup', () => {
        const base10 = parseInt(document.getElementById('base10').value);
        updateTextFields(base10);
    });

    document.getElementById('base16').addEventListener('change', () => {
        const base16 = document.getElementById('base16').value;
        const decimal = convertHexToDecimal(base16);
        updateTextFields(decimal);
    });

    updateTextFields(42);
});