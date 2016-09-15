var Guide = require('./hitch_hiker_guide');
var Logger = require('../logging/logger');
var NullLogger = require('../logging/null_logger');
var sinon = require('sinon');

var expect = require("expect");

describe('The meaning of life', function () {

  describe('the answer', function () {
    xit("with a real logger - the logger will throw!", function () {
      // Arrange
      var guide = new Guide(new Logger());

      // Act
      var answer = guide.answer();

      // Assert
      expect(answer).toBe("42");
    });

    it("with a stub logger we can test the answer", function () {
      var guide = new Guide(new NullLogger());

      var answer = guide.answer();

      expect(answer).toBe("42");
    });
  });

  describe('logging', function () {
    it("with a custom stub we can test logging", function () {
      var SpyLogger = function () {
        this.message = "";

        this.log = function(message) {
          this.message = message;
        };
      };
      var logger = new SpyLogger();
      var guide = new Guide(logger);

      guide.answer();

      expect(logger.message).toBe("Calculating the meaning of life, the universe and everything");
    });

    it("with sinon stub logger we can test logging with less fuss", function () {
      var logger = new Logger();
      var spy = sinon.stub(logger, "log");
      var guide = new Guide(logger);

      guide.answer();

      sinon.assert.calledWith(spy, "Calculating the meaning of life, the universe and everything");
    });

    it("with sinon mock logger we can test logging with less fuss", function () {
      var logger = new Logger();
      var mock = sinon.mock(logger, "log");
      var guide = new Guide(logger);
      mock.expects("log").withArgs("Calculating the meaning of life, the universe and everything");

      guide.answer();

      mock.verify();
    });
  });
});
