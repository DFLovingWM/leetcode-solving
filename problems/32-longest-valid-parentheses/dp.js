/**
 * `dp[i]`表示以`i`结尾的最长有效括号串的长度
 * 
 * 时间：O(N), 68ms
 */
var longestValidParentheses = function (text) {
  const n = text.length
  const dp = new Array(n).fill(0)
  let res = 0

  for (let i = 1; i < text.length; ++i) {
    if (text[i] === ')') {
      if (text[i - 1] === '(') { // 以'()'结尾
        dp[i] = (i - 2 >= 0 ? dp[i - 2] : 0) + 2
      } else { // 以'))'结尾
        const j = i - 1 - dp[i - 1] // j表示与i对称的位置
        if (j >= 0 && text[j] === '(') {
          dp[i] = (j - 1 >= 0 ? dp[j - 1] : 0) + dp[i - 1] + 2
        }
      }
    }

    res = Math.max(res, dp[i])
  }

  return res
};

module.exports = longestValidParentheses