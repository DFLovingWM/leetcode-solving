/**
 * `dp[i]`表示第`i`天卖出去，最多能赚的钱，则有：
 * `dp[i] = prices[i] - min`，其中`min`为最低(买入)价
 * 
 * 时间：O(N)，因为min可以用变量维护
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