# Bowling

## Background
Ten-pin bowling is a game in which a bowler rolls a ball down a lane toward
ten pins at the far end of the lane.
The objective is to knock down all ten pins on the first roll of the ball (a `strike`) 
or failing that, on the second roll (a `spare`).


Scoring is based on the number of pins you knock down. 
If you bowl a spare, you get to add the pins you knock down in your next roll to the current frame.
For strikes, you get to add the pin count on the next two rolls.

In the tenth frame a player who rolls a spare or strike is allowed to roll 
the extra balls to complete the frame. 
No more than three balls can be rolled in the tenth frame.

See [wikipedia](https://en.wikipedia.org/wiki/Ten-pin_bowling) for more details.

## Kata
Write two methods: `roll(pins)` and `score()`.

`roll(pins)` is called each time the player rolls a ball.
It takes an integer `pins` which is the number of pins knocked down.
It does not need to return anything.

`score()` is called only at the very end of the game.
It returns the total score for the game as an integer.
