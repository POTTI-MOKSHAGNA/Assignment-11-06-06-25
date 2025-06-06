function calculate(operation) {
    const firstNumber = parseFloat(document.getElementById('FirstNumber').value);
    const secondNumber = parseFloat(document.getElementById('SecondNumber').value);
    const resultDiv = document.querySelector('.container3');

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        resultDiv.innerHTML = 'The Result Is: Please enter valid numbers';
        return;
    }

    let result;
    if (operation === 'multiply') {
        result = firstNumber * secondNumber;
        resultDiv.innerHTML = `The Result Is: ${result}`;
    } else if (operation === 'divide') {
        if (secondNumber === 0) {
                resultDiv.innerHTML = 'The Result Is: Cannot divide by zero';
        } else {
                result = firstNumber / secondNumber;
                resultDiv.innerHTML = `The Result Is: ${result}`;
        }
    }
}