/**
 * 位压缩
 * 
 * 时间：`O(2^W)`, 224ms
 */
var maxScoreWords = function (words, letters, scores) {
  let res = 0
  const have = countFreq(letters)

  for (let s = (1 << words.length) - 1; s >= 0; --s) { // 遍历每一种组合
    const need = parseStrategy(words, s)
    let curr = 0
    
    for (const ch of need.keys()) {
      if (have.has(ch) && have.get(ch) >= need.get(ch)) { // 能满足，则累加分数
        curr += scores[ch.charCodeAt(0) - 'a'.charCodeAt(0)] * need.get(ch)
      } else { // 不能满足，则该策略失败
        curr = 0
        break
      }
    }

    res = Math.max(res, curr)
  }

  return res
};

// 计算频次
function countFreq (word) {
  const count = new Map()
  for (const ch of word) {
    count.set(ch, (count.get(ch) || 0) + 1)
  }
  return count
}

// 计算某策略下的频次
function parseStrategy (words, strategy) {
  const count = new Map()
  for (let i = 0, bit = strategy; bit; bit = bit >>> 1, ++i) {
    if (bit & 1) {
      for (const ch of words[i]) {
        count.set(ch, (count.get(ch) || 0) + 1)
      }
    }
  }
  return count
}

module.exports = maxScoreWords