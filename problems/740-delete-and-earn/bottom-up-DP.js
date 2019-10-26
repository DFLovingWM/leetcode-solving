/**
 * Bottom-up DP
 * 
 * 时间：O(N + M), 64ms
 * 空间：O(M)
 */
var deleteAndEarn = function (nums) {
  if (!nums.length) return 0

  const max = nums.reduce((m, i) => Math.max(m, i), -Infinity)

  const count = new Array(max + 1).fill(0) // 记录数字的频次
  for (const n of nums) {
    ++count[n]
  }

  const dp = new Array(max + 1).fill(0) // dp[i]表示前i个数字能获得的最大分数
  for (let i = 1; i <= max; ++i) {
    dp[i] = Math.max(
      dp[i - 1], // 不删
      (i - 2 >= 0 ? dp[i - 2] : 0) + count[i] * i // 删
    )
  }

  return dp[max]
};

module.exports = deleteAndEarn