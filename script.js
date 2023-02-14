const display = document.querySelector('.display');
const keys = document.querySelector('#keys');
const clear = document.querySelector('.clear')

keys.addEventListener('click', event => {
  const button = event.target;
  if (!button.matches('button')) return;
  const buttonValue = button.textContent; 
  const displayValue = display.textContent; 
  

  if(displayValue === '0') {
    display.textContent = buttonValue;
  } else {
    display.textContent += buttonValue; 
  }
});