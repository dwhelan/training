var fizzBuzz = require('./fizzBuzz');
var expect = require("expect");

describe('FizzBuzz', function () {
  it('should return the number when not a multiple of 3 or 5', function () {
    expect(fizzBuzz(1)).toBe("1");
    expect(fizzBuzz(2)).toBe("2");
  });

  it('should return "fizz" when the number when is a multiple of 3', function () {
    expect(fizzBuzz(3)).toBe("fizz");
    expect(fizzBuzz(6)).toBe("fizz");
  });

  it('should return "buzz" when the number when is a multiple of 5', function () {
    expect(fizzBuzz(5)).toBe("buzz");
    expect(fizzBuzz(10)).toBe("buzz");
  });

  it('should return "fizzbuzz" when the number when is a multiple of 3 and 5', function () {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  });
});
