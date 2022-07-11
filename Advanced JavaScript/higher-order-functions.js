// passing functions as arguments!

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculator(a, b, op) {
  return op(a, b);
}

var result = calculator(22, 20, subtract);
console.log(result);
