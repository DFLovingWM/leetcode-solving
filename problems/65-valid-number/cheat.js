/**
 * 作弊：JS 可调用 Number API
 */
var isNumber = function(s) {
  return !Number.isNaN(Number(s));
};

module.exports = isNumber;
