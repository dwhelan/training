'use strict';

module.exports = function(arabicNumber) {
  var number = arabicNumber;

  var romanSymbols = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  var result = "";

  arabicKeys().forEach(appendRomanSymbols);

  return result;

  function arabicKeys() {
    return Object.keys(romanSymbols).reverse();
  }

  function appendRomanSymbols(arabicKey) {
    while (number >= arabicKey) {
      appendRomanSymbol(arabicKey);
    }
  }

  function appendRomanSymbol(arabicKey) {
    result += romanSymbols[arabicKey];
    number -= arabicKey;
  }
};
