/**
 * 回溯（未优化）
 * 
 * 时间：O(N^N)
 */
var wordBreak = function (text, wordDict) {
  const words = new Set(wordDict)
  return backtrack(text, 0, words)
};

// 递归单元
function backtrack (text, from, words) {
  if (from === text.length) return true

  for (let end = from + 1; end <= text.length; ++end) {
    const prefix = text.slice(from, end)
    if (words.has(prefix) && backtrack(text, end, words)) { // 如果前缀匹配，则继续匹配后面的
      return true
    }
  }
  return false
}

module.exports = wordBreak