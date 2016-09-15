module.exports = function(logger) {

  this.answer = function() {
    logger.log("Calculating the meaning of life, the universe and everything");
    return "42";
  };
};
