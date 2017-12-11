var fizzBuzz = require('./fizzBuzz');
var expect = require("expect");

describe('FizzBuzz', function () {
  it("should return 'fizz' if the number is divisible by 3", function () {
    expect(fizzBuzz(3)).toBe("fizz");
    expect(fizzBuzz(6)).toBe("fizz");
  });

  it("should return 'buzz' if the number is divisible by 5", function () {
    expect(fizzBuzz(5)).toBe("buzz");
    expect(fizzBuzz(25)).toBe("buzz");
  });

  it("should return 'fizzbuzz' if the number is divisible by 3 and 5", function () {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  });

  it("should return the number if not divisible by 3 or 5", function () {
    expect(fizzBuzz(4)).toBe("4");
    expect(fizzBuzz(11)).toBe("11");
  });
});
