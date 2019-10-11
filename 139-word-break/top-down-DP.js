/**
 * 回溯 + 备忘录
 * 
 * 时间：76ms
 */
var wordBreak = function (text, wordDict) {
  const words = new Set(wordDict)
  return backtrack(text, 0, words, new Set())
};

// 递归单元
function backtrack (text, from, words, cache) {
  if (from === text.length) return true
  if (cache.has(from)) return false

  for (let end = from + 1; end <= text.length; ++end) {
    const prefix = text.slice(from, end)
    if (words.has(prefix) && backtrack(text, end, words, cache)) { // 如果前缀匹配，则继续匹配后面的
      return true
    }
  }
  cache.add(from)
  return false
}

module.exports = wordBreak