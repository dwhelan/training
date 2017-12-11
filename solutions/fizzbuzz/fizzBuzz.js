'use strict';

module.exports = function(number){
  var isFizz = function(number){
    return (number % 3 === 0)
  };

  var isBuzz = function(number){
    return (number % 5 === 0)
  };

  var isFizzBuzz = function(number){
    return isFizz(number) && isBuzz(number)
  };

  if(isFizzBuzz(number)){
    return "FizzBuzz";
  } else if(isFizz(number)){
    return "Fizz";
  } else if (isBuzz(number)){
    return "Buzz";
  } else {
    return number.toString();
  }
};
