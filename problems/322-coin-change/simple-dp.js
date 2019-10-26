/**
 * dp[i]表示和为i的最少个数，则有
 * dp[i] = min(dp[i], dp[i - coin] + 1)
 */
var coinChange = function(coins, target) {
  let dp = Array.from({length: target + 1}, () => Infinity)

  dp[0] = 0
  for (const coin of coins) { // 对于每一种面值
    for (let i = coin; i <= target; ++i) { // 对于每一个可能的和
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1) // 总是记录更少个数
      }
    }
  }

  return dp[target] === Infinity ? -1 : dp[target]
};

[
  [[1, 2, 5],11],
  [[2], 3]
].forEach(input => {
  console.log(coinChange(...input))
})