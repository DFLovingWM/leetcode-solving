/**
 * Top-down DP
 */
var wordBreak = function (S, wordDict) {
  const wordSet = new Set(wordDict)
  const cache = new Map()

  function helper (from) {
    if (from === S.length) return true
    if (cache.has(from)) return cache.get(from)

    let res = false
    for (let i = from; i < S.length; ++i) {
      const s = S.slice(from, i + 1)
      if (wordSet.has(s)) {
        if (helper(i + 1)) {
          res = true
          break
        }
      }
    }
    cache.set(from, res)
    return res
  }

  return helper(0)
};

module.exports = wordBreak