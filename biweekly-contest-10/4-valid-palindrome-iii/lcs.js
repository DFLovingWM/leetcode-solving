/**
 * 转化为求LCS
 * 
 * 时间：O(L^2)，340ms
 */
var isValidPalindrome = function (s, K) {
  return s.length - getLCS(s, reverseString(s)) <= K
};

// 反转字符串
function reverseString (str) {
  let ret = ''
  for (let i = str.length - 1; i >= 0; --i) {
    ret += str[i]
  }
  return ret
}

// 求最大公共子序列的长度
// O(L^2)
function getLCS (s1, s2) {
  const [l1, l2] = [s1.length, s2.length]
  const dp = Array.from({ length: l1 + 1 }, () => {
    return Array.from({ length: l2 + 1 }, () => {
      return 0
    })
  })
  for (let i = 1; i <= l1; ++i) {
    for (let j = 1; j <= l2; ++j) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[l1][l2]
}

module.exports = isValidPalindrome