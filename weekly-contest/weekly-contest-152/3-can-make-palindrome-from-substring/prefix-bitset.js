/**
 * 预处理成前缀频次（位压缩）
 * 
 * 时间：`O(L + 26N)`, 248ms
 * 空间：`O(L)`, 74.2MB
 */
var canMakePaliQueries = function (text, queries) {
  let acc = 0
  const prefix = [acc]
  for (const ch of text) {
    const n = 1 << (ch.charCodeAt(0) - 'a'.charCodeAt(0))
    acc ^= n
    prefix.push(acc)
  }

  return queries.map(([from, to, maxChange]) => {
    ++to
    return Math.floor(getOdd2(prefix[to], prefix[from]) / 2) <= maxChange
  })
};

// 思路1
function getOdd (A, B) {
  let res = 0
  for (let i = 0; i < 26; ++i) {
    const a = A & (1 << i)
    const b = B & (1 << i)
    if (a ^ b) {
      ++res
    }
  }
  return res
}

// 思路2
function getOdd2 (A, B) {
  let res = 0
  for (let C = A ^ B; C; C = C >>> 1) {
    if (C & 1) ++res
  }
  return res
}

module.exports = canMakePaliQueries