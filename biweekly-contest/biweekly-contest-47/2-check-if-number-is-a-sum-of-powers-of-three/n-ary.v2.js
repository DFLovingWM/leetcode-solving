/**
 * 化为3进制
 * 手动实现
 */
var checkPowersOfThree = function(n) {
  while (n !== 0) {
    if (n % 3 === 2) {
      return false;
    }
    n = Math.floor(n / 3);
  }
  return true;
};