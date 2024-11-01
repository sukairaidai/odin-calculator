
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

let firstValue;
let secondValue;
let operator;
let displayValue = "";

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
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
    display.textContent = value;
}

function addDigitsEvent() {
    const digits = document.querySelectorAll(".number");
    digits.forEach((digit) => {
        digit.addEventListener('click', (e) => {
            displayValue += e.target.textContent;
            updateDisplay(displayValue);
        })
    })
}

addDigitsEvent();