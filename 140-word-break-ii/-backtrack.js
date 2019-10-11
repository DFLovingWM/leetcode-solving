/**
 * 回溯
 * 
 * 时间：O(N^N)
 */
var wordBreak = function (text, wordDict) {
  const words = new Set(wordDict)
  const res = []
  backtrack(text, 0, words, [], res)
  return res
};

// 递归单元
function backtrack (text, from, words, acc, res) {
  if (from === text.length) {
    res.push(acc.join(' '))
    return
  }

  for (let end = from + 1; end <= text.length; ++end) {
    const prefix = text.slice(from, end)

    if (words.has(prefix)) { // 如果前缀匹配，则继续匹配后面的
      acc.push(prefix)
      backtrack(text, end, words, acc, res)
      acc.pop()
    }
  }
}

module.exports = wordBreak