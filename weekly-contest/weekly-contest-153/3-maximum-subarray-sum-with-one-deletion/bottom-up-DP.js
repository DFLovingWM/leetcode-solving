/**
 * Bottom-up DP
 * 
 * 时间：`O(N)`, 208ms
 * 空间：`O(N)`, 64.7MB
 */
var maximumSum = function (arr) {
  // 特例：全都是负数，但至少要选一个 => 选max
  const max = Math.max(...arr)
  if (max <= 0) return max

  const n = arr.length
  // dp[i][k]表示前`i`个数字中、剩余`k`次删除机会的最大子序和
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: 2 }, () => 0))
  let res = 0

  // 初始状态
  dp[0][0] = -Infinity
  dp[0][1] = 0

  // 迭代
  for (let i = 1; i <= n; ++i) {
    const curr = arr[i - 1]

    dp[i][1] = Math.max(
      curr, // 单独
      curr + dp[i - 1][1] // 接上
    )
    dp[i][0] = Math.max(
      curr, // 单独
      curr + dp[i - 1][0], // 接上
      dp[i - 1][1] // 接上，但删除本元素
    )

    res = Math.max(res, dp[i][0], dp[i][1])
  }

  return res
};

module.exports = maximumSum