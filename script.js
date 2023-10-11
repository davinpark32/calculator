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
let myArr = [];

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
    if (currentNumber == 0) {
        currentNumber = '';
    }
    switch(target.id) {
        case 'one':
            currentNumber += '1';
            display.textContent = currentNumber;
            break;
        case 'two':
            currentNumber += '2';
            display.textContent = currentNumber;
            break;
        case 'three':
            currentNumber += '3';
            display.textContent = currentNumber;
            break;
        case 'four':
            currentNumber += '4';
            display.textContent = currentNumber;
            break;
        case 'five':
            currentNumber += '5';
            display.textContent = currentNumber;
            break;
        case 'six':
            currentNumber += '6';
            display.textContent = currentNumber;
            break;
        case 'seven':
            currentNumber += '7';
            display.textContent = currentNumber;
            break;
        case 'eight':
            currentNumber += '8';
            display.textContent = currentNumber;
            break;
        case 'nine':
            currentNumber += '9';
            display.textContent = currentNumber;
            break;
        case 'zero':
            currentNumber += '0';
            display.textContent = currentNumber;
            break;
        case 'decimal':
            if(!currentNumber.includes('.')) {
                currentNumber += '.';
                display.textContent = currentNumber;
            }
            break;
        case 'plus':
            myArr.push(display.textContent);
            if (myArr.length == 2) {
                console.log('two arrays');
                display.textContent = operate(operator, +myArr[0], +myArr[1]);
                myArr.push(display.textContent);
                console.log(myArr);
                myArr.splice(0,2);
                currentNumber ='';
                operator = '+';
                break;
            } else {
                console.log(myArr);
                currentNumber = '';
                display.textContent = 'X';
                operator = '+';
                console.log(myArr);
                break;

            }
        case 'minus' :
            myArr.push(display.textContent);  //[2,2]
            if (myArr.length == 2) {
                console.log('two arrays');
                display.textContent = operate(operator, +myArr[0], +myArr[1]);
                myArr.push(display.textContent);
                console.log(myArr);
                myArr.splice(0,2);
                currentNumber =''
                operator = '-';
                break;
            } else {
                console.log(myArr);
                currentNumber = '';
                display.textContent = 'X';
                operator = '-';
                console.log(myArr);
                break;
            }
        case 'multiply' :
            myArr.push(display.textContent);  //[2,2]
            if (myArr.length == 2) {
                console.log('two arrays');
                display.textContent = operate(operator, +myArr[0], +myArr[1]);
                myArr.push(display.textContent);
                console.log(myArr);
                myArr.splice(0,2);
                currentNumber =''
                operator = '*';
                break;
            } else {
                console.log(myArr);
                currentNumber = '';
                display.textContent = 'X';
                operator = '*';
                console.log(myArr);
                break;
            }
        case 'divide':
            myArr.push(display.textContent);  //[2,2]
            if (myArr.length == 2) {
                console.log('two arrays');
                display.textContent = operate(operator, +myArr[0], +myArr[1]);
                myArr.push(display.textContent);
                console.log(myArr);
                myArr.splice(0,2);
                currentNumber =''
                operator = '/';
                break;
            } else {
                console.log(myArr);
                currentNumber = '';
                display.textContent = 'X';
                operator = '/';
                console.log(myArr);
                break;
            }
        case 'equal':
            console.log(`operator is ${operator}`);
            myArr.push(currentNumber);
            console.log(`${myArr[0]} / ${myArr[1]}`);
            display.textContent = operate(operator, +myArr[0], +myArr[1]);
            myArr.splice(0,2);
            console.log(myArr);
            break;
        case 'clear':
            myArr = [];
            currentNumber = '';
            display.textContent = '0'
            operator = '';
            break;
        case 'backspace':
            currentNumber = currentNumber.slice(0,-1);
            if(!currentNumber) {
                currentNumber = '0';
            }
            display.textContent = currentNumber;
            break;
    }
});

