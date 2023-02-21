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
let reset = false;

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
    firstOperand = '';
    secondOperand = '';
    selectedOperator = '';
    reset = true;
  }
});

clear.addEventListener('click', () => {
  firstOperand = '';
  secondOperand = '';
  selectedOperator = '';
  display.textContent = '0';
});


// Test Case 
// Description: Perform continous calculation 1+1+1+1=4

1.) Click 1+1
EXPECTATION: Nothing. 1 displays with stored operator and opreands 
ACTUAL: Works 

1.) Click 1+1+1
EXPECTATION: Nothing. 1 displays with stored operator and operands
ACTUAL: Works 