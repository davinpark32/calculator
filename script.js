function add (num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num1 / num2;
}

let currentNumber = '';
let firstNumber = '';
let operator = '';
let secondNumber;

function operate (operator, num1, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

// When you click a number, it appears on the display
let display = document.querySelector('#display');
let menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'one':
            currentNumber += '1';
            display.textContent = currentNumber;
            break;
        case 'two':
            currentNumber += '2';
            display.textContent = currentNumber;
            break;
        case 'plus':
            firstNumber = display.textContent;
            currentNumber = '';
            display.textContent = '0';
            operator = '+';
            console.log(firstNumber);
            break;
        case 'equal':
            secondNumber = display.textContent;
            console.log(`${firstNumber} / ${secondNumber}`);
            display.textContent = operate(operator, +firstNumber, +secondNumber);
            break;
    }
});

