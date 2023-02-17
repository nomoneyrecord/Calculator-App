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
      firstOperand += buttonValue;
    } else {
      secondOperand += buttonValue;
    }
    display.textContent += buttonValue;
  } else if (button.classList.contains('operators')) {
    selectedOperator = buttonValue;
    display.textContent = '';
  } else if (button.classList.contains('equal')) {

  }

  if (selectedOperator !== '') {
    display.textContent = secondOperand;
  }
});

clear.addEventListener('click', () => {
  firstOperand = '';
  secondOperand = '';
  selectedOperator = '';
  display.textContent = '0';
});
