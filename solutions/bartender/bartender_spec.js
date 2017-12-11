var Bartender = require('./bartender');
var Logger = require('../../logging/logger');
var NullLogger = require('../../logging/null-logger');
var Notifier = require('../../bartender/notifier');
var expect = require("expect");
var sinon = require('sinon');

describe('Making a drink', function () {
  describe("Charging for drinks", function () {
    it("Should charge $9.99 for a mockito", function () {
      var bartender = new Bartender(new NullLogger());
      var cost = bartender.makeADrink("mockito");
      expect(cost).toBe(9.99);
    })
  });

  describe("Logging", function () {
    it("with a custom stub we can test logging", function () {
      var SpyLogger = function () {
        this.message = "";

        this.log = function(message) {
          this.message = message;
        };
      };
      var logger = new SpyLogger();
      var bartender = new Bartender(logger);

      bartender.makeADrink('mockito');

      expect(logger.message).toBe("Making a mockito");
    });

    it("with sinon stub logger we can test logging with less fuss", function () {
      var logger = new Logger();
      var spy = sinon.stub(logger, "log");
      var bartender = new Bartender(logger);

      bartender.makeADrink('mockito');

      sinon.assert.calledWith(spy, "Making a mockito");
    });

    it("should notify of any log failures", function () {
      var error = new Error('file system full');
      var logger = new Logger();
      var notifier = new Notifier();

      var log = sinon.stub(logger, "log");
      log.throws(error);

      var alert = sinon.stub(notifier, "alert");

      var bartender = new Bartender(logger, notifier);

      bartender.makeADrink('mockito');
      sinon.assert.calledWith(alert, "Logging failed: file system full");
    })
  });
});
