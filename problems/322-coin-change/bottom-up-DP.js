/**
 * Bottom-up DP
 */
var coinChange = function (coins, target) {
  // dp[n]表示组成n的最短方案长度
  const dp = new Array(target + 1).fill(Infinity)
  dp[0] = 0

  for (let sum = 1; sum <= target; ++sum) {
    for (const coin of coins) {
      if (sum - coin >= 0) {
        dp[sum] = Math.min(dp[sum], dp[sum - coin] + 1)
      }
    }
  }

  // 调换内外循环也可以
  // for (const coin of coins) {
  //   for (let sum = coin; sum <= target; ++sum) {
  //     dp[sum] = Math.min(dp[sum], dp[sum - coin] + 1)
  //   }
  // }

  return dp[target] === Infinity ? -1 : dp[target]
};

module.exports = coinChange