const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((a, b) => a + b, 0);
};

const multiply = function(arr) {
  return arr.reduce((a, b) => a * b, 1);
};

const power = function(a, b) {
  let sum = a;
	for (i = 1; i < b; i++) {
    sum *= a;
  }
  return sum;
};

const factorial = function(num) {
  let sum = 1;
  if (num === 0) {
    return 1;
  }
	for (i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
