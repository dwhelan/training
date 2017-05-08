'use strict';

module.exports = function () {
  this.log = function () {
    throw "Doh! You used a real logger rather than a test double";
  };
};
