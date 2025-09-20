const reverseString = function (str) {
  let splited = str.split("");
  let result = [];
  for (let i = splited.length - 1; i >= 0; i--) {
    result.push(splited[i]);
  }
  return result.join("");
};

// Do not edit below this line
module.exports = reverseString;
