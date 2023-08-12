function lcmForArray(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    
    const gcd = (a, b) => {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };
    
    const lcm = (a, b) => (a * b) / gcd(a, b);
    
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = lcm(result, numbers[i]);
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
    console.log('lcm page is fully loaded');

    document.getElementById('calculateBtn').addEventListener('click', () => {
        const inputStr = document.getElementById('inputString').value;
        const numbers = getArrayOfNumbersFromString(inputStr);
        const lcmResult = lcmForArray(numbers);
        document.getElementById("result").innerText = "The LCM is: " + lcmResult;
    });
});