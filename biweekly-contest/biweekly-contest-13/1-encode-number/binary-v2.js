/**
 * 去掉第一位
 */
var encode = function (num) {
  return Number(num + 1).toString(2).slice(1)
};