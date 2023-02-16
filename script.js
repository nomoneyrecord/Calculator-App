const display = document.querySelector('.display');
const keys = document.querySelector('#keys');
const clear = document.querySelector('.clear')
const operands = document.querySelector('.operands')
const operators = document.querySelector('.operators')
const decimal = document.querySelector('decimal')
const memory = document.querySelector('.memory')
let firstOperand = '';
let secondOperand = '';
let selectedOperator = '';



keys.addEventListener('click', event => {
  const button = event.target;
  if (!button.matches('button')) return;
  const buttonValue = button.textContent; 
  const displayValue = display.textContent; 

 
 
  if (button.classList.contains('operands')) {
    if (selectedOperator === '') {
      firstOperand = displayValue;
    } else {
      secondOperand = displayValue;
    }
    display.textContent = buttonValue;
  }

  if (button.classList.contains('operators')) {
    if ()
  }

});
