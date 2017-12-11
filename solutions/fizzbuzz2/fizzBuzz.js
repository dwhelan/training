module.exports = function(number){
  function isFizzNumber() {
    return number % 3 === 0;
  }

  function isBuzzNumber() {
    return number % 5 == 0;
  }

  function isFizzBuzzNumber() {
    return isFizzNumber() && isBuzzNumber();
  }

  if (isFizzBuzzNumber())
    return "fizzbuzz";
  else if (isFizzNumber())
    return "fizz";
  else if (isBuzzNumber())
    return "buzz";
  else
    return number.toString();
};
