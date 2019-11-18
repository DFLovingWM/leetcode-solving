/**
 * “位压缩”在这道题中可以有2个用途：
 * - 枚举策略
 * - 代替哈希表(Set)
 * 
 * 时间：`O(2^N)`, 124ms
 */
var maxLength = function (arr) {
  arr = arr.map(word => {
    let res = 0
    for (const ch of word) {
      const n = 1 << (ch.charCodeAt(0) - 'a'.charCodeAt(0))
      if (res & n) { // 冲突
        return [0, 0]
      }
      res |= n
    }
    return [res, word.length]
  }).filter(item => item[0])

  let res = 0
  for (let s = (1 << arr.length) - 1; s >= 0; --s) { // 枚举策略
    const r = parseStrategy(arr, s)
    if (r[0]) res = Math.max(res, r[1])
  }
  return res
};

// 解析策略
function parseStrategy (arr, strategy) {
  let res = 0, len = 0

  for (let i = 0; strategy; ++i, strategy = strategy >>> 1) {
    if (strategy & 1) { // 表示该方案包含`arr[i]`
      if (res & arr[i][0]) { // 冲突，表示该策略不行
        return [0, 0]
      }
      res |= arr[i][0]
      len += arr[i][1]
    }
  }

  return [res, len]
}

module.exports = maxLength