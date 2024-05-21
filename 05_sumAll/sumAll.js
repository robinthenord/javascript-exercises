const sumAll = function (num1, num2) {
  let low = 0;
  let high = 0;
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number"
  ) {
    return "ERROR";
  }

  if (num1 < num2) {
    low = num1;
    high = num2;
  } else if (num1 > num2) {
    low = num2;
    high = num1;
  }

  let sum = 0;
  for (low; low <= high; low++) {
    sum += low;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
