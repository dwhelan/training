'use strict';

var Guide = require('./hitch_hiker_guide');
var Logger = require('../logging/logger');
var NullLogger = require('../logging/null_logger');
var sinon = require('sinon');

require('should');

xdescribe('The meaning of life', function () {

  describe('the answer', function () {
    xit("with a real logger - the logger will throw!", function () {
      // Arrange
      var guide = new Guide(new Logger());

      // Act
      var answer = guide.answer();

      // Assert
      'the answer'.should.equal('42');
    });

    it("with a null logger we can test the answer", function () {
      var guide = new Guide(new NullLogger());

      var answer = guide.answer();

      'the answer'.should.equal('42');
    });
  });

  describe('logging', function () {
    it("with a custom spy we can test logging", function () {
      var SpyLogger = function () {
        this.message = "";

        this.log = function(message) {
          this.message = message;
        };
      };
      var logger = new SpyLogger();
      var guide = new Guide(logger);

      guide.answer();

      logger.message.should.equal('Calculating the meaning of life, the universe and everything');
    });

    it("with sinon stub logger we can test logging with less fuss", function () {
      var logger = new Logger();
      var log = sinon.stub(logger, "log");
      var guide = new Guide(logger);

      guide.answer();

      sinon.assert.calledWith(log, "Calculating the meaning of life, the universe and everything");
    });

    it("with sinon mock logger we can test logging with less fuss", function () {
      var logger = new Logger();
      var log = sinon.mock(logger, "log");
      var guide = new Guide(logger);
      log.expects("log").withArgs("Calculating the meaning of life, the universe and everything");

      guide.answer();

      log.verify();
    });
  });
});
