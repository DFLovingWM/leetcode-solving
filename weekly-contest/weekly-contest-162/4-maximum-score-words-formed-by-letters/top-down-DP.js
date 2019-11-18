/**
 * 0/1背包问题，Top-down DP
 * 
 * 时间：小于`O(2^W)`, 100ms
 */
var maxScoreWords = function (words, letters, score) {
  words = words.map(word => counter(word)) // 每个单词化为频次
  letters = counter(letters) // 当前资本化为频次

  const cache = new Map()

  function helper (i) {
    if (i === words.length) return 0

    const key = hash(i, letters)
    if (cache.has(key)) return cache.get(key)

    let res = helper(i + 1) // 不选
    if (ge(letters, words[i])) { // 选（能选的情况下）
      // 探索
      letters = subtract(letters, words[i])
      res = Math.max(res, helper(i + 1) + getScore(words[i], score))
      // 回溯
      letters = add(letters, words[i])
    }
    cache.set(key, res)
    return res
  }

  return helper(0, letters)
};

function hash (i, letters) {
  let res = `${i}-`
  const a = 'a'.charCodeAt(0)
  for (let i = 0; i < 26; ++i) { // 依次遍历26个字母
    const key = String.fromCharCode(a + i)
    const value = letters.get(key) || 0
    if (value > 0) {
      res += `(${key}, ${value})`
    }
  }
  return res
}

function counter (arr) {
  const res = new Map()
  for (const item of Array.from(arr)) {
    res.set(item, (res.get(item) || 0) + 1)
  }
  return res
}

function ge (aCount, bCount) {
  return Array.from(bCount.keys()).every(k => aCount.has(k) && aCount.get(k) >= bCount.get(k))
}

function subtract (aCount, bCount) {
  for (const key of bCount.keys()) {
    aCount.set(key, aCount.get(key) - bCount.get(key))
    if (aCount.get(key) === 0) {
      aCount.delete(key)
    }
  }
  return aCount
}

function add (aCount, bCount) {
  for (const key of bCount.keys()) {
    aCount.set(key, (aCount.get(key) || 0) + bCount.get(key))
  }
  return aCount
}

function getScore (word, scores) {
  let res = 0
  for (const [ch, count] of word.entries()) {
    res += scores[ch.charCodeAt(0) - 'a'.charCodeAt(0)] * count
  }
  return res
}

module.exports = maxScoreWords