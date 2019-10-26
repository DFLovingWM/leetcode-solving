/**
 * Bottom-up DP
 * `dp[n][k][0~1]`表示前n天、最多进行了k次交易、是否持有的最大收益
 * 
 * 本题`K`可能很大，需要分类讨论
 * 
 * 时间：O(NK), 100ms
 */
var maxProfit = function (K, prices) {
  if (K >= Math.floor(prices.length / 2)) { // 相当于`K=无限`
    return greedy(prices)
  }

  const N = prices.length
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

  return dp[N][K][0]
};

function greedy (prices) {
  let res = 0
  for (let i = 1; i < prices.length; ++i) {
    if (prices[i] > prices[i - 1]) {
      res += prices[i] - prices[i - 1]
    }
  }
  return res
}

module.exports = maxProfit