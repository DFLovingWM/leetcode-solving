/**
 * `dp[i]`表示得到i个字符需要的最少操作数
 * 
 * 时间：O(N^2), 96ms
 */
var minSteps = function (n) {
  const dp = new Array(n + 1).fill(Infinity)
  dp[1] = 0

  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j * 2 <= i; ++j) { // 遍历i的所有因数j
      if (i % j === 0) {
        dp[i] = Math.min(dp[i], dp[j] + (i / j))
      }
    }
  }

  return dp[n]
};

module.exports = minSteps