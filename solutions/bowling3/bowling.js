'use strict';

const _ = require('lodash');

// module.exports = class Bowling {

//   roll() {
//   }

//   score() {
//   }
// }

module.exports = class Bowling {
  constructor() {
    this._rolls = [];
  }

  roll(...pins) {
    this._rolls.push(...pins);
  }

  score() {
    const rolls = this._rolls;

    const frameScore = function(roll) {
      return rolls[roll] + rolls[roll+1]
    }

    const isAStrike = function(roll) {
      return rolls[roll] == 10;
    }

    const strikeScore = function(roll) {
      return rolls[roll] + rolls[roll+1] + rolls[roll+2];
    }

    const isASpare = function(roll) {
      return frameScore(roll) == 10;
    }

    const spareScore = function(roll) {
      return rolls[roll] + rolls[roll+1] + rolls[roll+2];
    }

    let score = 0;
    let roll = 0;

    _.times(10, frame => {
      if (isAStrike(roll)) {
        score += spareScore(roll);
        roll++;
      } else {
        if (isASpare(roll)) {
          score += spareScore(roll);
        } else {
          score += frameScore(roll);
        }
        roll += 2;
      }
    });

    return score;
  }
}

