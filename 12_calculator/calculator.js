const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  if (!array.length) return 0;
  return array.reduce((acc, current) => acc + current);
};

const multiply = function (array) {
  return array.reduce((acc, current) => acc * current);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
