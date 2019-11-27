/**
 * Bottom-up DP
 * 
 * 时间：`O(N^3)`, 84ms
 */
var mctFromLeafValues = function (arr) {
  const n = arr.length

  // 预处理：区间的最大值
  const max = Array.from({ length: n }, () => Array.from({ length: n }, () => -Infinity))
  for (let i = 0; i < n; ++i) {
    max[i][i] = arr[i]
    for (let j = i + 1; j < n; ++j) {
      max[i][j] = Math.max(max[i][j - 1], arr[j])
    }
  }

  const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity))
  // 初始状态(叶子结点)
  for (let i = 0; i < n; ++i) {
    dp[i][i] = 0
  }
  // 迭代
  for (let len = 2; len <= n; ++len) { // 1. 遍历长度，从小到大
    for (let i = 0; i + len - 1 < n; ++i) { // 2. 遍历起点
      const j = i + len - 1 // 终点

      for (let k = i; k < j; ++k) { // 3. 遍历分界点
        dp[i][j] = Math.min(
          dp[i][j],
          max[i][k] * max[k + 1][j] + dp[i][k] + dp[k + 1][j]
        )
      }
    }
  }
  
  return dp[0][n - 1]
};

module.exports = mctFromLeafValues