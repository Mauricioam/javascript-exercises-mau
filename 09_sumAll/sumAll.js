const sumAll = function (startNum, endNum) {
  if (isNaN(startNum) || isNaN(endNum) || startNum < 0 || endNum < 0) {
    return "ERROR";
  }
  if (startNum > endNum) {
    let interMedValue;
    interMedValue = startNum;
    startNum = endNum;
    endNum = interMedValue;
  }
  let sum = 0;
  for (let i = startNum; i <= endNum; i++) {
    sum = sum + i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
