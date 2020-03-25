const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator--keys');
const display = document.querySelector('.calculator--display');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'devide'
    ) {
      key.classList.add('is-depressed');
      calculator.dataset.previousKeyType = 'operator';
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }

    if (action === 'decimal') {
      display.textContent = displayedNum + '.';
    }

    if (action === 'clear') {
      console.log('clear key');
    }

    if (action === 'claculate') {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;
      display.textContent = calculate(firstValue, operator, secondValue);
    }
  }
});

const calculate = (firstValue, operator, secondValue) => {
  let result = '';
  if (operator === 'add') {
    result = parseFloat(firstValue) + parseFloat(secondValue);
  }
  if (operator === 'subtract') {
    result = parseFloat(firstValue) - parseFloat(secondValue);
  }
  if (operator === 'multiply') {
    result = parseFloat(firstValue) * parseFloat(secondValue);
  }
  if (operator === 'devide') {
    result = parseFloat(firstValue) / parseFloat(secondValue);
  }
  return result;
};
