var calculator = require('./romanNumeralCalculator');
var expect = require("expect");

describe('Roman Numeral Calculator', function () {
  var testCases = {
    1: 'I',
    2: "II",
    3: "III",
    4: "IV",
    // ...
    1984: "MCMLXXXIV"
  };

  Object.keys(testCases).forEach(function (arabic) {
    test(parseInt(arabic), testCases[arabic])
  });

  function test(arabic, expectedRoman) {
    it("Should convert " + arabic + " to " + expectedRoman, function () {
      expect(calculator(arabic)).toBe(expectedRoman);
    });
  }
});
