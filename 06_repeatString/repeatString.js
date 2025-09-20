const repeatString = function (string, num) {
  let result = [];
  while (num > 0) {
    result.push(string);
    num--;
  }
  return result.join("");
};

// Do not edit below this line
module.exports = repeatString;
