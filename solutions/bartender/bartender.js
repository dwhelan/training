'use strict';

module.exports = function (logger, notifier) {
  this.makeADrink = function (name) {
    try {
      logger.log("Making a " + name);
    }
    catch(error) {
      notifier.alert("Logging failed: " + error.message);
    }
    return 9.99;
  };
};
