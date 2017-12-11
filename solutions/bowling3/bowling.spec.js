'use strict';

var Bowling = require('./bowling');

require('should');
const _ = require('lodash');

describe('Bowling', function () {
  let game;

  beforeEach( () => {
    game = new Bowling();
  });

  xit('should do something', function () {
    expect("the answer").toBe("42");
  });

  it('all gutter balls should score 0', () => {
    _.times(20, () => { game.roll(0)} );
    game.score().should.eql(0);
  });

  it('all singles should score 20', () => {
    _.times(20, () => { game.roll(1)} );
    game.score().should.equal(20);
  });

  it('a spare should score bonus of next roll', () => {
    game.roll(4, 6);
    game.roll(3, 0);
    _.times(16, () => { game.roll(0)} );
    game.score().should.eql(16);
  });

  it('a strike should score bonus of next two rolls', () => {
    game.roll(10);
    game.roll(6, 3);
    _.times(16, () => { game.roll(0)} );
    game.score().should.eql(28);
  });

  it('a perfect game should score 300', () => {
    _.times(12, () => { game.roll(10)} );
    game.score().should.eql(300);
  });
});
