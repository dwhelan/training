module.exports = function(number) {

  function divisibleBy3() {
    return number % 3 === 0;
  }

  function divisibleBy5() {
    return number % 5 === 0;
  }

  if (divisibleBy3() && divisibleBy5())
    return "fizzbuzz";

  if (divisibleBy3())
    return "fizz";

  if (divisibleBy5())
    return "buzz";

  return number.toString();
};
