# Bowling

## Background
The game consists of 10 frames. In each frame the player has two opportunities to knock down 10 pins.  The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.

A spare is when the player knocks down all 10 pins in two tries. The bonus for that frame is the number of pins knocked down by the next roll.

A strike is when the player knocks down all 10 pins on his first try. The bonus for that frame is the value of the next two balls rolled.

In the tenth frame a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame. However no more than three balls can be rolled in the tenth frame.

## Kata
Write two methods: `roll()` and `score() : int`.

`roll(pins : int)` is called each time the player rolls a ball. The argument is the number of pins knocked down.

`score() : int` is called only at the very end of the game. It returns the total score for the game.