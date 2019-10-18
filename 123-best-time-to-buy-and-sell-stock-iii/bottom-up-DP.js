/**
 * Bottom-up DP
 */
var maxProfit = function (prices) {
  const K = 2 // 最多2次交易
  const N = prices.length
  const dp = Array.from({ length: N + 1 }, () => {
    return Array.from({ length: K + 1 }, () => {
      return 0
    })
  })
  for ()
};

module.exports = maxProfit