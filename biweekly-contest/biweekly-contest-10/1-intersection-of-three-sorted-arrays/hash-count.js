/**
 * HashMap计数（但没有利用“有序”）
 * 
 * 时间：O(N), 76ms
 * 空间：O(N)
 */
var arraysIntersection = function (A, B, C) {
  const count = new Map()
  const arrs = [A, B, C]

  for (const arr of arrs) {
    for (const n of arr) {
      count.set(n, (count.get(n) || 0) + 1)
    }
  }

  const res = []
  for (const [n, c] of count.entries()) {
    if (c === arrs.length) {
      res.push(n)
    }
  }
  return res
};

module.exports = arraysIntersection