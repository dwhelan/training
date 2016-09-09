# Fizzbuzz

## Background
Fizzbuzz is a group word game for children to teach them about division.

Players take turns to count incrementally, replacing any number divisible by 3 with the word "fizz", any number divisible by 5 with the word "buzz", and any number divisible by 3 and 5 with the word "fizzbuzz". 

## Kata
Create a `FizzBuzz` class with a `valueFor(number : int) : string` method.

It should return a string according to the rules of Fizzbuzz:

```
game = new FizzBuzz();

game.valueFor(1);  // "1"
game.valueFor(2);  // "2"
game.valueFor(3);  // "fizz"
game.valueFor(4);  // "4"
game.valueFor(5);  // "buzz"
game.valueFor(6);  // "fizz"
...
game.valueFor(15); // "fizzbuzz"
```
