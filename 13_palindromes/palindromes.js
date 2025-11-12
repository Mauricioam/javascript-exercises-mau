const palindromes = function (string) {
  const alfanumericRef = "abcdefghijklmnopqrstuxyz1234567890";
  let cleanedString = string
    .split("")
    .filter((letter) => alfanumericRef.includes(letter))
    .join("");
};

// Do not edit below this line
module.exports = palindromes;
