/**
 * Bottom-up DP
 * 
 * 时间：`O(N^2)`
 * 空间：`O(N)`
 */
const MOD = Math.pow(10, 9) + 7

var numberOfWays = function (numPeople) {
  const numPair = numPeople / 2
  // dp[i]表示`i`对人的方案数
  const dp = Array.from({ length: numPair + 1 }, () => 0)
  dp[0] = dp[1] = 1

  for (let n = 2; n <= numPair; ++n) {
    for (let i = 0; i < n; ++i) {
      dp[n] = (dp[n] + dp[i] * dp[n - 1 - i] % MOD) % MOD
    }
  }

  return dp[numPair]
};

module.exports = numberOfWays