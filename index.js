let currentInput = '';
let currentOperator = '';
let result = 0;

const displayElement = document.getElementById('inputBox');

function clearDisplay() {
  currentInput = '';
  currentOperator = '';
  result = 0;
  updateDisplay();
}

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function appendOperator(operator) {
  if (currentInput !== '') {
    calculateResult();
    currentOperator = operator;
    currentInput = '';
  }
}

function calculateResult() {
  const num = parseFloat(currentInput);
  if (!isNaN(num)) {
    switch (currentOperator) {
      case '+':
        result += num;
        break;
      case '-':
        result -= num;
        break;
      case '*':
        result *= num;
        break;
      case '/':
        result /= num;
        break;
      default:
        result = num;
    }
    currentInput = '';
    currentOperator = '';
    updateDisplay();
  }
}

function updateDisplay() {
  displayElement.value = currentInput !== '' ? currentInput : result;
}

updateDisplay();