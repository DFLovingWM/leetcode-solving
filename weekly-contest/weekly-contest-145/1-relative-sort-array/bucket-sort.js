/**
 * 桶排序(哈希)
 * 
 * 时间：`O(N + MlogM)`， 52ms
 */
var relativeSortArray = function (A, B) {
  const freq = new Map() // 记录存在于B中数字的频次
  const rest = [] // 放置不存在于B中的数字
  for (const n of B) {
    freq.set(n, 0)
  }

  // 安排
  for (const n of A) {
    if (freq.has(n)) {
      freq.set(n, freq.get(n) + 1)
    } else {
      rest.push(n)
    }
  }

  // 构造有序
  const res = []
  for (const n of B) {
    for (let i = 0; i < freq.get(n); ++i) {
      res.push(n)
    }
  }
  res.push(...rest.sort((a, b) => a - b))
  return res
};

module.exports = relativeSortArray;