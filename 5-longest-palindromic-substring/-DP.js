/**
 * dp[i][j]表示text[i:j]是否是回文串
 * 
 * 时间：O(N^2)。然而在本题中效率低，TLE了
 */
function longestPalindrome (text) {
  if (!text) return text

  const n = text.length
  const dp = Array.from({ length: n }, () => {
    return Array.from({ length: n }, () => {
      return false
    })
  })

  // 奇数串初始化
  for (let i = 0; i < n; ++i) {
    dp[i][i] = true
  }

  // 偶数串初始化
  for (let i = 1; i < n; ++i) {
    if (text[i - 1] === text[i]) {
      dp[i - 1][i] = true
    }
  }

  // 迭代
  // 注意i要逆序，因为i+1 => i
  for (let i = n - 1; i >= 0; --i) {
    for (let j = i + 2; j < n; ++j) {
      if (dp[i + 1][j - 1] && text[i] === text[j]) {
        dp[i][j] = true
      }
    }
  }

  // 找最长
  let res = ''
  for (let len = n; len >= 1; --len) {
    for (let from = 0; from + len - 1 < n; ++from) {
      if (dp[from][from + len - 1]) {
        return text.slice(from, from + len)
      }
    }
  }
}

module.exports = longestPalindrome