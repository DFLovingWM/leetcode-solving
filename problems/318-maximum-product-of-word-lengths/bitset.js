/**
 * 位压缩
 * 
 * 时间：`O(N^2 + NM)`, 112ms
 */
var maxProduct = function (words) {
  words = words.map(word => {
    let bitset = 0
    for (const ch of word) {
      const n = 1 << (ch.charCodeAt(0) - '0'.charCodeAt(0))
      bitset |= n
    }
    return [bitset, word.length]
  })

  let res = 0
  const n = words.length

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i !== j && !(words[i][0] & words[j][0])) { // 两者不冲突，考虑结合
        res = Math.max(res, words[i][1] * words[j][1])
      }
    }
  }

  return res
};

module.exports = maxProduct