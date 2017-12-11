var Bowling = require('./bowling');
var expect = require("expect");

describe('Bowling', function () {
  var game;

  beforeEach(function(){
    game = new Bowling();
  })

  it('should score 0 for all gutter balls', function () {
    rollMany(0, 20);
    expect(score()).toBe(0);
  });

  it('should score 20 for all single pins', function () {
    rollMany(1, 20);
    expect(score()).toBe(20);
  });

  it('should score a bonus of the next roll for a spare', function () {
    rollASpare();
    roll(3);
    rollMany(0, 17);
    expect(score()).toBe(16);
  });

  function score() {
    return game.score();
  }

  it('should score a bonus of the next 2 roll for a strike', function () {
    rollAStrike();
    roll(3);
    roll(4);
    rollMany(0, 16);
    expect(score()).toBe(24);
  });

  it('should score 300 for a perfect game', function () {
    rollMany(10, 12);
    expect(score()).toBe(300);
  });

  function rollAStrike() {
    roll(10);
  };

  function rollASpare() {
    roll(4);
    roll(6);
  };

  function rollMany(pins, count) {
    for (var i = 0; i < count; i++) {
      game.roll(pins);
    }
  }

  function roll(pins) {
    game.roll(pins);
  }
});
