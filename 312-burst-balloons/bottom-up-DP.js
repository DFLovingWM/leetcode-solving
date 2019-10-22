/**
 * Bottom-up DP
 * 
 * 时间：O(N^3), 88ms
 */
var maxCoins = function (nums) {
  const n = nums.length
  const dp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0))
  nums.unshift(1)
  nums.push(1)

  for (let len = 1; len <= n; ++len) { // 遍历长度
    for (let i = 1; i <= n - len + 1; ++i) { // 遍历起点
      const j = i + len - 1 // 对应的终点
      for (let k = i; k <= j; ++k) {
        const tmp = dp[i][k - 1] + dp[k + 1][j] + nums[k] * nums[i - 1] * nums[j + 1]
        dp[i][j] = Math.max(dp[i][j], tmp)
      }
    }
  }

  return dp[1][n]
};

module.exports = maxCoins