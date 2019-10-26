/**
 * 模式：完全背包问题。
 * 动态规划：dp[i]表示text[:i]能否拆分
 * 
 * 时间：O(L^2), 64ms
 */
var wordBreak = function (text, wordDict) {
  const dp = Array.from({ length: text.length + 1 }, () => false)
  const words = new Set(wordDict)
  const maxLength = wordDict.reduce((res, word) => Math.max(res, word.length), 0)

  dp[0] = true

  for (let i = 1; i <= text.length; ++i) {
    const from = Math.max(0, i - maxLength) // 前面：从这个位置开始找（不必从0开始，优化text很长、word很短的情况）

    for (let j = from; j < i; ++j) {
      // 如果前面能拆分、并且加上的子串也在字典中，那么这个也能
      if (dp[j] && words.has(text.slice(j, i))) {
        dp[i] = true
        break // 找到一个就可以停止啦
      }
    }
  }

  return dp[text.length]
};

module.exports = wordBreak