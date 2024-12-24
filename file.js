let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let previousInput = '';

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    display.innerText = '0';
}

function appendNumber(number) {
    if (currentInput.length < 10) {
        currentInput += number;
        display.innerText = currentInput;
    }
}

function appendOperator(operator) {
    if (currentInput !== '') {
        if (previousInput !== '') {
            calculateResult();
        }
        currentOperator = operator;
        previousInput = currentInput;
        currentInput = '';
    }
}

function calculateResult() {
    if (currentOperator !== '' && previousInput !== '') {
        let result;
        switch (currentOperator) {
            case '+':
                result = parseFloat(previousInput) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(previousInput) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(previousInput) * parseFloat(currentInput);
                break;
            case '/':
                result = parseFloat(previousInput) / parseFloat(currentInput);
                break;
            case '%':
                result = parseFloat(previousInput) % parseFloat(currentInput);
                break;
        }
        display.innerText = result;
        currentInput = result.toString();
        currentOperator = '';
        previousInput = '';
    }
}
