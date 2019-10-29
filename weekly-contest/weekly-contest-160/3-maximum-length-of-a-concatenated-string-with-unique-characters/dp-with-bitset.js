/**
 * 暴力DP + 位压缩
 * 
 * 时间：96ms
 */
var maxLength = function (words) {
  const dp = [0]

  for (const word of words) {
    const bits = getBits(word)
    if (bits === -1) continue
    
    for (const b of dp) {
      if (!(b & bits)) { // 没有交集，表示可以连接
        dp.push(b ^ bits)
      }
    }
  }

  let res = -Infinity
  for (const b of dp) {
    res = Math.max(res, countOnes(b))
  }
  return res
};

// 单词转化为bitset
function getBits (word) {
  let res = 0
  for (const ch of word) {
    const tmp = 1 << (ch.charCodeAt(0) - 'a'.charCodeAt(0))
    if (tmp & res) return -1 // 重复字符
    res ^= tmp
  }
  return res
}

// 数二进制表示的1的个数
function countOnes (bits) {
  let res = 0
  while (bits) {
    if (bits & 1) ++res
    bits = bits >>> 1
  }
  return res
}

module.exports = maxLength