# Fizzbuzz

## Background
Fizzbuzz is a group word game for children to teach them about division.

Players take turns to count incrementally, replacing any number divisible by 3 with the word "fizz", any number divisible by 5 with the word "buzz", and any number divisible by 3 and 5 with the word "fizzbuzz". 

## Kata
Create a `Fizzbuzz` class with a `valueFor(number : int) : string` method.

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

Players take turns to count incrementally, replacing any number divisible by 3 with the word "fizz", any number divisible by 5 with the word "buzz", and any number divisible by 3 and 5 with the word "fizzbuzz". 

## Variation
Also return "fizz" if the number contains the digit "3" and "buzz" if the number contains digit "5":

```
game.valueFor(1);  // "1"
game.valueFor(2);  // "2"
game.valueFor(3);  // "fizz"
game.valueFor(4);  // "4"
game.valueFor(5);  // "buzz"
game.valueFor(6);  // "fizz"
...
game.valueFor(13); // "fizz"
game.valueFor(14); // "14"
game.valueFor(15); // "fizzbuzz"
...
game.valueFor(20); // "buzz"
game.valueFor(21); // "fizz"
game.valueFor(22); // "22"
game.valueFor(23); // "fizz"
...
game.valueFor(30); // "fizzbuzz"

```