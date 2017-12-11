var Bowling = require('./bowling');
var expect = require("expect");

describe('Bowling', function () {
  var game;

  beforeEach(function () {
    game = new Bowling();
  });

  it('all gutter balls should score 0', function () {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  });

  it('all single pins should score 20', function () {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  });

  it('a spare should score bonus of next roll', function () {
    rollASpare();
    game.roll(4);
    rollMany(17, 0);

    expect(game.score()).toBe(18);
  });

  it('it should not be a spare if 10 pins knocked down across frames', function () {
    game.roll(0);
    game.roll(4);
    game.roll(6);
    game.roll(4);
    rollMany(16, 0);

    expect(game.score()).toBe(14);
  });

  it('a strike should score bonus of next two rolls', function () {
    game.roll(10);
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);

    expect(game.score()).toBe(24);
  });

  it('all gutter balls with 3 strikes in last frame should score 30', function () {
    rollMany(18, 0);
    game.roll(10);
    game.roll(10);
    game.roll(10);

    expect(game.score()).toBe(30);
  });

  it('a perfect game should score 300', function () {
    rollMany(12, 10);

    expect(game.score()).toBe(300);
  });

  function rollASpare() {
    game.roll(4);
    game.roll(6);
  }

  function rollMany(count, pins) {
    for (var roll = 0; roll < count; roll++) {
      game.roll(pins);
    }
  }
});
