'use strict';

var Bartender = require('./bartender');
require('should');

xdescribe('Making a drink', function () {
  describe('Charging for drinks', function () {
    it('Should charge $9.99 for a mockito', function () {
      var bartender = new Bartender();
      var cost = bartender.makeADrink('mockito');
      cost.should.equal(9.99);
    });
  });
});
