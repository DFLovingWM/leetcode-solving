/**
 * dp[i]表示第i天卖出去，最多能赚的钱
 */
var maxProfit = function (prices) {
  let min = prices[0]
  let res = 0 // 不参与

  for (let i = 1; i < prices.length; ++i) {
    res = Math.max(res, prices[i] - min)
    min = Math.min(min, prices[i])
  }

  return res
};