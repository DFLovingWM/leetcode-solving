/**
 * Top-down DP + 位压缩
 * 
 * 时间：`O(N * 2^26)`, 88ms
 */
var maxLength = function (arr) {
  arr = arr.map(getBitset).filter(item => item[0]) // 转化为bitset，并且过滤自身冲突的
  const cache = new Map()

  function helper (i, bitset) {
    if (i === arr.length) return 0
    
    const key = `${i}, ${bitset}`
    if (cache.has(key)) return cache.get(key)

    let res = helper(i + 1, bitset) // 不选
    if (!(bitset & arr[i][0])) {
      const tmp = helper(i + 1, bitset | arr[i][0]) + arr[i][1] // 选
      res = Math.max(res, tmp)
    }
    cache.set(key, res)
    return res
  }

  return helper(0, 0)
};

// 将字符串转化为二进制整数（bitset）
function getBitset (word) {
  let res = 0
  let count1 = 0

  for (const ch of word) {
    const n = ch.charCodeAt(0) - 'a'.charCodeAt(0)
    if (res & (1 << n)) { // 冲突
      return [0, 0]
    }
    res |= 1 << n
  }

  return [res, word.length]
}

module.exports = maxLength