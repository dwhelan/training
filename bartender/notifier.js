'use strict';

module.exports = function () {
  this.alert = function () {
    throw 'Doh! You used a real notifier rather than a test double!';
  };
};
