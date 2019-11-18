/**
 * 回溯
 */
var generateSentences = function (synonyms, text) {
  const word2Words = new Map()
  for (const [a, b] of synonyms) {
    const words = word2Words.get(a) || word2Words.get(b) || new Set()
    words.add(a)
    words.add(b)
    word2Words.set(a, words)
    word2Words.set(b, words)
  }

  const tokens = text.split(' ')
  const res = []

  function backtrack (i, acc) {
    if (i === tokens.length) {
      res.push(acc)
      return
    }

    if (word2Words.has(tokens[i])) { // 有同义词，则枚举
      for (const word of word2Words.get(tokens[i])) {
        backtrack(i + 1, acc + (i === 0 ? '' : ' ') + word)
      }
    } else { // 没有同义词
      backtrack(i + 1, acc + (i === 0 ? '' : ' ') + tokens[i])
    }
  }

  backtrack(0, '')
  return res.sort() // 最后排序
};

module.exports = generateSentences