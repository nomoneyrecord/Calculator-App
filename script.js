const display = document.querySelector('.display');
const keys = document.querySelector('#keys');
const clear = document.querySelector('.clear')
const operands = document.querySelector('.operands')
const operators = document.querySelector('.operators')
const decimal = document.querySelector('.decimal')
const memory = document.querySelector('.memory')
const equals = document.querySelector('.equal')
let firstOperand = '';
let secondOperand = '';
let selectedOperator = '';

keys.addEventListener('click', event => {
  const button = event.target;
  const buttonValue = button.textContent; 

  if (button.classList.contains('operands')) {
    if (selectedOperator === '') {
      if (display.textContent === '0') {
        display.textContent = '';
      }
      firstOperand += buttonValue;
      display.textContent += buttonValue;
    } else {
      secondOperand += buttonValue;
      display.textContent = secondOperand;
    }
  } else if (button.classList.contains('operators')) {
    selectedOperator = buttonValue;
    display.textContent = firstOperand;
  } else if (button.classList.contains('equal')) {
    const num1 = parseInt(firstOperand);
    const num2 = parseInt(secondOperand);
    let result;
    switch (selectedOperator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case 'x':
        result = num1 * num2;
        break;
      case '÷':
        result = num1 / num2;
        break;
    }
    display.textContent = result.toString();
    firstOperand = result.toString();
    secondOperand = '';
    selectedOperator = '';
  }
});

clear.addEventListener('click', () => {
  firstOperand = '';
  secondOperand = '';
  selectedOperator = '';
  display.textContent = '0';
});




