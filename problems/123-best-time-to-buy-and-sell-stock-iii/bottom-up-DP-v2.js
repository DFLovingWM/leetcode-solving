/**
 * Bottom-up DP
 * `dp[n][0~2][0~1]`表示前n天、最多进行了多少次交易、是否持有的最大收益
 * 
 * 时间：O(N), 88ms
 */
var maxProfit = function (prices) {
  const N = prices.length
  const K = 2
  const dp = new Array(N + 1).fill(0).map(() => {
    return new Array(K + 1).fill(0).map(() => {
      return new Array(2).fill(-Infinity)
    })
  })

  // 初始化
  for (let k = 0; k <= K; ++k) {
    dp[0][k][0] = 0 // 第0天(还没开市)，不持有股票，收益肯定为0
    dp[0][k][1] = -Infinity // 第0天(还没开市)，持有股票，这种情况是不可能的
  }

  // DP
  for (let n = 1; n <= N; ++n) {
    dp[n][0][0] = 0

    for (let k = 1; k <= K; ++k) {
      dp[n][k][0] = Math.max(
        dp[n - 1][k][0], // 不动
        dp[n - 1][k][1] + prices[n - 1] // 卖出
      )
      dp[n][k][1] = Math.max(
        dp[n - 1][k][1], // 不动
        dp[n - 1][k - 1][0] - prices[n - 1] // 买入
      )
    }
  }

  return dp[N][2][0]
};

module.exports = maxProfit