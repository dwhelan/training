'use strict';

module.exports = function () {
  this._rolls = [];

  this.roll = function (pins) {
    this._rolls.push(pins);
  }

  this.score = function () {
    const NUMBER_OF_FRAMES = 10;
    const ALL_PINS = 10;

    var score = 0;
    var rollIndex = 0;
    var self = this;

    for (var frame = 0; frame < NUMBER_OF_FRAMES; frame++) {
      if (isAStrike())
        scoreAStrike();
      else if (isASpare())
        scoreASpare();
      else
        scoreANormalFrame();
    }

    return score;

    function isAStrike() {
      return self._rolls[rollIndex] === ALL_PINS;
    }

    function scoreAStrike() {
      score += ALL_PINS + strikeBonus();
      rollIndex++;
    }

    function strikeBonus() {
      return self._rolls[rollIndex + 1] + self._rolls[rollIndex + 2];
    }

    function isASpare() {
      return self._rolls[rollIndex] + self._rolls[rollIndex + 1] === ALL_PINS;
    }

    function scoreASpare() {
      score += ALL_PINS + spareBonus();
      rollIndex += 2;
    }

    function spareBonus() {
      return self._rolls[rollIndex + 2];
    }

    function scoreANormalFrame() {
      score += basicFrameScore();
      rollIndex += 2;
    }

    function basicFrameScore() {
      return self._rolls[rollIndex] + self._rolls[rollIndex + 1];
    }
  };
};
