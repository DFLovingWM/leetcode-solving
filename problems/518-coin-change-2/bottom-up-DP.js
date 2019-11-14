/**
 * dp[i]表示和为i的排列数
 * 
 * 时间：`O(NV)`, 96ms
 */
var change = function(target, coins) {
  let dp = Array.from({ length: target + 1 }, () => 0)
  dp[0] = 1

  for (const coin of coins) {
    for (let i = coin; i <= target; ++i) {
      dp[i] += dp[i - coin]
    }
  }

  return dp[target]
};

module.exports = change