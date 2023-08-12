function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

function gcdForArray(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = gcd(result, numbers[i]);
    }
    return result;
}

function getArrayOfNumbersFromString(str) {
    let numbers = str.split(/[\s,]+/).map((item) => {
        return parseInt(item);
    });
    numbers = numbers.filter((item) => {
        return !isNaN(item);
    });
    return numbers;
}

window.addEventListener('load', (event) => {
    console.log('gcd page is fully loaded');

    document.getElementById('calculateBtn').addEventListener('click', () => {
        const inputStr = document.getElementById('inputString').value;
        const numbers = getArrayOfNumbersFromString(inputStr);
        console.log(numbers);
        const gcdResult = gcdForArray(numbers);
        document.getElementById("result").innerText = "The GCD is: " + gcdResult;
    });
});