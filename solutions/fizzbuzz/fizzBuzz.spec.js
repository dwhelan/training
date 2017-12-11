var fizzBuzz = require('./fizzBuzz');
var expect = require("expect");

describe('FizzBuzz Solution', function(){
  it('should return Fizz if is divisible by 3', function(){
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it('should return Buzz if is divisible by 5', function(){
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it('should return FizzBuzz if is divisible by 3 and 5', function(){
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it('should return the number if is not divisible by 3 or 5', function(){
    expect(fizzBuzz(4)).toBe("4");
  });
});
