var isFizz = function(number){
  return (number % 3 ===0)
}
var isBuzz = function(number){
  return (number % 5 ===0)
}
var isFizzBuzz = function(number){
  return isFizz(number) && isBuzz(number)
}

var fizzBuzz = function(number){
  if(isFizzBuzz(number)){
    return "FizzBuzz";
  } else if(isFizz(number)){
    return "Fizz";
  } else if (isBuzz(number)){
    return "Buzz";
  } else {
    return number;
  }
}

var assert = require("assert")
describe('FizzBuzz Kata', function(){
  it('should return Fizz if is divisible by 3', function(){
    assert.equal('Fizz', fizzBuzz(3));
  });
  it('should return Buzz if is divisible by 5', function(){
    assert.equal('Buzz', fizzBuzz(5));
  });
  it('should return FizzBuzz if is divisible by 3 and 5', function(){
    assert.equal('FizzBuzz', fizzBuzz(15));
  });
  it('should return the number if is not divisible by 3 or 5', function(){
    assert.equal(4, fizzBuzz(4));
  });
})