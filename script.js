let firstNumber = null;
let operator = null;
let display = document.getElementById("display");

function addToDisplay(number) {
  display.value += number;
}

function clearDisplay() {
  display.value = "";
  firstNumber = null;
  operator = null;
}

function backspace() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function calculate(newOperator) {
  if (firstNumber === null) {
    firstNumber = parseFloat(display.value);
    display.value = "";
  } else if (operator) {
    let result = eval(firstNumber + operator + display.value);
    display.value = result;
    firstNumber = result;
  }
  operator = newOperator || null;
}
