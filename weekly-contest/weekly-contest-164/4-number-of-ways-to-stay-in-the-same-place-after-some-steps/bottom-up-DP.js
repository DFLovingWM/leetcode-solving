/**
 * Bottom-up DP + 空间压缩
 * 
 * 时间：`O(S^2)`, 92ms
 * 空间：`O(L)`
 */

const MOD = Math.pow(10, 9) + 7

var numWays = function (steps, arrLen) {
  // dp[i]表示当前在下标`i`处的方案数
  let dp = Array.from({ length: Math.min(steps + 1, arrLen) }, () => 0)
  dp[0] = 1

  for (let s = 1; s <= steps; ++s) {
    const nextDp = dp.slice()

    // 时间优化：当前走了`s`步，最远去到下标`s`
    for (let i = 0; i < Math.min(arrLen, s + 1); ++i) {
      if (i - 1 >= 0) {
        nextDp[i] = (nextDp[i] + dp[i - 1]) % MOD
      }
      if (i + 1 < arrLen) {
        nextDp[i] = (nextDp[i] + dp[i + 1]) % MOD
      }
    }

    dp = nextDp
  }

  return dp[0]
};

module.exports = numWays