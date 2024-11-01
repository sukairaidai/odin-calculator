
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstValue = "";
let secondValue = "";
let operator = "";
let displayValue = "";

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "/":
            if (b === 0) {
                return "error, division by zero";
            }
            return divide(a, b);
        default:
            return "error, unkown operation";
    }
}

function updateDisplay(value) {
    const display = document.querySelector(".result");
    if (value) {
        display.textContent = value;
    } else {
        display.textContent = `${firstValue} ${operator} ${secondValue}`
    }
}

function addDigitsEvents() {
    const digits = document.querySelectorAll(".number");
    digits.forEach((digit) => {
        digit.addEventListener('click', (e) => {
            displayValue += e.target.textContent;
            updateCurrentValue(e.target.textContent);
            updateDisplay();
        })
    })
}

function updateCurrentValue(update) {
    if (!operator) {
        firstValue += update;
    } else {
        secondValue += update;
    }
}

function roundValue(val) {
    return Math.round(val * 1000) / 1000;
}

function updateOperator(newOperator) {
    if (!firstValue) {
        return;
    }
    if (secondValue) {
        updateResult();
    }
    operator = newOperator;
    updateDisplay();
}

function addOperatorsEvents() {
    const operators = document.querySelectorAll(".operator");
    operators.forEach((operator) => {
        operator.addEventListener("click", (e) => {
            updateOperator(e.target.textContent);
        })
    })
}

function updateResult() {
    if (!firstValue || !secondValue) {
        return;
    }
    const result = operate(operator, parseFloat(firstValue), parseFloat(secondValue));
    reset();
    firstValue = roundValue(result);
    updateDisplay();
}

function reset() {
    firstValue = "";
    secondValue = "";
    operator = "";
    displayValue = "";
    updateDisplay();
}

function handleEqualsClick() {
    const equals = document.querySelector(".equals");
    equals.addEventListener("click", () => {
        updateResult();
    })
}

addDigitsEvents();
addOperatorsEvents();
handleEqualsClick();