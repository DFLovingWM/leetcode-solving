/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
  let res = 0;
  while (n > 1) {
    res += n >>> 1;
    n = Math.ceil(n / 2);
  }
  return res;
};