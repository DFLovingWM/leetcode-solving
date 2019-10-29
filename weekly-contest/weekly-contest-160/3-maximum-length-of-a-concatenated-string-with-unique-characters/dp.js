/**
 * 暴力DP
 * 
 * 时间：204ms
 */
var maxLength = function (words) {
  const dp = [new Set()]

  for (const word of words) {
    const chars = new Set(Array.from(word))
    if (chars.size < word.length) continue // 单词本身含有重复字符，忽略

    for (let i = 0, len = dp.length; i < len; ++i) { // 从dp中找
      if (canCombine(dp[i], chars)) {
        const tmp = new Set(dp[i])
        for (const ch of chars) tmp.add(ch)
        dp.push(tmp) // 延续
      }
    }
  }

  let res = -Infinity
  for (const s of dp) res = Math.max(res, s.size)
  return res
};

function canCombine (A, B) {
  for (const ch of A) {
    if (B.has(ch)) return false
  }
  return true
}

module.exports = maxLength