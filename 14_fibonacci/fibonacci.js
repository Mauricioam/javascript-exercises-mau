const fibonacci = function (index) {
  if (index < 0) return "OOPS";
  index = Number(index);
  let seq = [0, 1];
  if (index == 1 || index == 0) return index;
  for (let i = 2; i <= index; i++) {
    seq[i] = seq[i - 2] + seq[i - 1];
  }
  return seq[index];
};

//  0 1 2 3 4 5 6
// [0,1,1,2,3,5,8]

// Do not edit below this line
module.exports = fibonacci;
