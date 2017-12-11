
module.exports = function() {
  this._rolls = [];

  this.roll = function(pins) {
    this._rolls.push(pins);
  };

  this.score = function() {
    var total = 0;
    var rollIndex = 0;
    var self = this;

    const TOTAL_FRAMES = 10;
    const TOTAL_PINS = 10;

    for (var frame=0; frame < TOTAL_FRAMES; frame++) {

      if (isAStrike()) {
        total += strikeScore();
        rollIndex += 1;
      }
      else {
        total += pinsKnockedDownInFrame();
        if (isASpare()) {
          total += spareBonus();
        }
        rollIndex += 2;
      }
    }

    return total;

    function pinsKnockedDownInFrame() {
      return self._rolls[rollIndex] + self._rolls[rollIndex + 1];
    }

    function isAStrike() {
      return self._rolls[rollIndex] == TOTAL_PINS;
    }

    function strikeScore() {
      return 10 + strikeBonus();
    }

    function strikeBonus() {
      return self._rolls[rollIndex + 1] + self._rolls[rollIndex + 2]
    }

    function isASpare() {
      return pinsKnockedDownInFrame() == TOTAL_PINS;
    }

    function spareScore() {
      return 10 + spareBonus();
    }

    function spareBonus() {
      return self._rolls[rollIndex + 2];
    }
  };
};
