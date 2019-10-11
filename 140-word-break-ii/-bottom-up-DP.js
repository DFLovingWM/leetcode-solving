/**
 * 模式：完全背包问题。
 * 动态规划：dp[i]表示text[:i]能否拆分
 * 
 * 时间：O(L^3)，实际上超时了
 */
var wordBreak = function (text, wordDict) {
  const words = new Set(wordDict)
  const maxLength = wordDict.reduce((res, word) => Math.max(res, word.length), 0)

  const list = Array.from({ length: text.length + 1 }, () => [])
  list[0] = ['']

  for (let i = 1; i <= text.length; ++i) {
    const from = Math.max(0, i - maxLength) // 前面：从这个位置开始找（不必从0开始，优化text很长、word很短的情况）

    for (let j = from; j < i; ++j) {
      // 如果前面能拆分、并且加上的子串也在字典中，那么这个也能
      const acc = text.slice(j, i)
      if (list[j].length > 0 && words.has(acc)) {
        for (const prefix of list[j]) {
          list[i].push(prefix + ' ' + acc)
        }
      }
    }
  }

  return list[text.length]
};

module.exports = wordBreak