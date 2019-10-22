/**
 * 动态规划：
 * 滚动数组/逆序更新可将空间压缩到一维
 * 
 * 时间：O(N^2), 56ms
 * 空间：O(N)
 */
var minimumTotal = function (triangle) {
  const n = triangle.length
  const dp = new Array(n).fill(Infinity)

  dp[0] = triangle[0][0]

  for (let i = 1; i < n; ++i) {
    for (let j = triangle[i].length - 1; j >= 0; --j) {
      // 状态转移
      // 这里没有dummy，所以需要特殊处理第0个元素
      if (j === 0) {
        dp[0] += triangle[i][0]
      } else {
        dp[j] = Math.min(dp[j], dp[j - 1]) + triangle[i][j]
      }
    }
  }

  return Math.min(...dp)
};

console.log(minimumTotal([
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
]))