'use strict';

const Guide = require('./hitch-hiker-guide');
const Logger = require('../logging/logger');
const NullLogger = require('../logging/null-logger');
const sinon = require('sinon');

require('should');

xdescribe('The meaning of life', function () {

  describe('the answer', function () {
    xit('with a real logger - the logger will throw!', function () {
      // Arrange
      const guide = new Guide(new Logger());

      // Act
      const answer = guide.answer();

      // Assert
      answer.should.equal('42');
    });

    it('with a null logger we can test the answer', function () {
      const guide = new Guide(new NullLogger());

      const answer = guide.answer();

      answer.should.equal('42');
    });
  });

  describe('logging', function () {
    it('with a custom spy we can test logging', function () {
      var SpyLogger = function () {
        this.message = '';

        this.log = function(message) {
          this.message = message;
        };
      };

      const logger = new SpyLogger();
      const guide = new Guide(logger);

      guide.answer();

      logger.message.should.equal('Calculating the meaning of life, the universe and everything');
    });

    it('with sinon stub logger we can test logging with less fuss', function () {
      const logger = new Logger();
      const log = sinon.stub(logger, 'log');
      const guide = new Guide(logger);

      guide.answer();

      sinon.assert.calledWith(log, 'Calculating the meaning of life, the universe and everything');
    });

    it('with sinon mock logger we can test logging with less fuss', function () {
      const logger = new Logger();
      const log = sinon.mock(logger, 'log');
      const guide = new Guide(logger);
      log.expects('log').withArgs('Calculating the meaning of life, the universe and everything');

      guide.answer();

      log.verify();
    });
  });
});
