'use strict';

var Bartender = require('./bartender');
var expect = require("expect");

describe('Making a drink', function () {
  describe("Charging for drinks", function () {
    it("Should charge $9.99 for a mockito", function () {
      var bartender = new Bartender();
      var cost = bartender.makeADrink("mockito");
      expect(cost).toBe(9.99);
    })
  })
});
