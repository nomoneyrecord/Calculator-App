const display = document.querySelector('.display');
const keys = document.querySelector('#keys');
const clear = document.querySelector('.clear');
const operands = document.querySelector('.operands');
const operators = document.querySelector('.operators');
const decimal = document.querySelector('.decimal');
const memory = document.querySelector('.memory');
const equals = document.querySelector('.equal');

let firstOperand = '';
let secondOperand = '';
let selectedOperator = '';
let reset = false;
let currentResult = null;

keys.addEventListener('click', event => {
  const button = event.target;
  const buttonValue = button.textContent; 

  if (button.classList.contains('operands')) {
    if (selectedOperator === '') {
      if (display.textContent === '0' || reset) {
        display.textContent = '';
        reset = false;
      }
      firstOperand += buttonValue;
      display.textContent += buttonValue;
    } else {
      secondOperand += buttonValue;
      display.textContent = secondOperand;
    }
  } else if (button.classList.contains('operators')) {
    if (currentResult === null) {
      currentResult = parseFloat(firstOperand);
    } else {
      const num2 = parseFloat(secondOperand);
      switch (selectedOperator) {
        case '+':
          currentResult += num2;
          break;
        case '-':
          currentResult -= num2;
          break;
        case 'x':
          currentResult *= num2;
          break;
        case '÷':
          currentResult /= num2;
          break;
      }
      display.textContent = currentResult.toString();
      firstOperand = currentResult.toString();
      secondOperand = '';
    }
    selectedOperator = buttonValue;
    reset = true;
  } else if (button.classList.contains('equal')) {
    if (selectedOperator !== '' && secondOperand !== '') {
      const num2 = parseFloat(secondOperand);
      switch (selectedOperator) {
        case '+':
          result = currentResult + num2;
          break;
        case '-':
          result = currentResult - num2;
          break;
        case 'x':
          result = currentResult * num2;
          break;
        case '÷':
          result = currentResult / num2;
          break;
      }
      display.textContent = result.toString();
      currentResult = null;
      firstOperand = result.toString();
      secondOperand = '';
      selectedOperator = '';
      reset = true;
    }
  }
});

clear.addEventListener('click', () => {
  firstOperand = '';
  secondOperand = '';
  selectedOperator = '';
  currentResult = null;
  display.textContent = '0';
});
