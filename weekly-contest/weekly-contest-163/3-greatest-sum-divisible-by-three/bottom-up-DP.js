/**
 * Bottom-up DP
 * 
 * 时间：`O(N)`, 276ms
 * 空间：`O(N)`
 */
var maxSumDivThree = function (nums) {
  const n = nums.length

  // dp[i][mod]表示遍历前i个数字、除以3余数为mod的最大和
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: 3 }, () => -Infinity))
  dp[0][0] = [0]

  for (let i = 1; i <= n; ++i) {
    for (let j = 0; j < 3; ++j) { // 当前余数
      const num = nums[i - 1]
      const prevJ = (j - num % 3 + 3) % 3 // 上一个余数
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][prevJ] + num)
    }
  }

  return dp[n][0]
};

module.exports = maxSumDivThree