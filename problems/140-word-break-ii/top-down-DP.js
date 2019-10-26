/**
 * 回溯 + 备忘录
 * 
 * 时间：O(N^3), 80ms
 */
var wordBreak = function (text, wordDict) {
  const words = new Set(wordDict)
  return backtrack(text, 0, words, new Map())
};

// 递归单元
function backtrack (text, i, words, cache) {
  if (cache.has(i)) return cache.get(i)

  const res = []

  if (i === text.length) {
    res.push('') // 可以用空串代表结尾
  } else {
    for (let end = i + 1; end <= text.length; ++end) {
      const prefix = text.slice(i, end)
      if (words.has(prefix)) { // 如果前缀匹配，则继续匹配后面的
        for (const suffix of backtrack(text, end, words, cache)) {
          if (suffix === '') {
            res.push(prefix)
          } else {
            res.push(prefix + ' ' + suffix)
          }
        }
      }
    }
  }

  cache.set(i, res)
  return res
}

module.exports = wordBreak