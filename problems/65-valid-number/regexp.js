/**
 * 一行正则
 */
var isNumber = function(s) {
  const regexp = /^[+-]?(\d+|\.\d+|\d+\.|\d+\.\d+)([Ee][+-]?\d+)?$/;
  return regexp.test(s);
};

module.exports = isNumber;
