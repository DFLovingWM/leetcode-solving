/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function(coins) {
  let res = 0;
  for (const coin of coins) {
    res += Math.ceil(coin / 2);
  }
  return res;
};
