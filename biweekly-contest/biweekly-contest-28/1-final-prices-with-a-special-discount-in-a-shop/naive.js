/**
 * 暴力
 * 
 * 时间：O(N^2), 84ms
 */
var finalPrices = function(prices) {
  const res = [];
  const n = prices.length;
  for (let i = 0; i < n; ++i) {
    let j = i + 1;
    for (; j < n; ++j) {
      if (prices[j] <= prices[i]) {
        break;
      }
    }
    res.push(prices[i] - (j < n ? prices[j] : 0));
  }
  return res;
};

module.exports = finalPrices;