'use strict';

var Bowling = require('./bowling');

require('should');

xdescribe('Bowling', function () {
  let game = new Bowling();

  it('should do something', function () {
    'the answer'.should.equal(42);
  });
});
