/**
 * 动态规划：设dp[i][j]为s[i:j]的LPS长度
 * 
 * 时间：O(L^2), 304ms
 */
var isValidPalindrome = function (s, K) {
  const n = s.length
  const dp = Array.from({ length: n }, (_, i) => {
    return Array.from({ length: n }, (__, j) => {
      if (i === j) return 1 // 只有1个字符时，长度为1
      return 0 // 其余情况，暂时设为0
    })
  })

  for (let i = n - 1; i >= 0; --i) { // i递减
    for (let j = i + 1; j < n; ++j) { // j递增（始终在i右边）
      if (s[i] === s[j]) {
        // 新的首尾字符若相等，则长度增加2
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        // 若不想等，根据“序列”特点，找更大值
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }

  const maxLength = dp[0][n - 1] // 最长长度
  return s.length - maxLength <= K
};

module.exports = isValidPalindrome