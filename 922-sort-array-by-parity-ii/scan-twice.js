/**
 * 2次扫描
 * 时间：O(N), 104ms
 */
var sortArrayByParityII = function(A) {
  const odds = []
  const evens = []
  for (const n of A) {
    if (n & 1) {
      odds.push(n)
    } else {
      evens.push(n)
    }
  }
  
  const res = []
  for (let i = 0, n = A.length / 2; i < n; ++i) {
    res.push(evens[i], odds[i])
  }
  return res
};

module.exports = sortArrayByParityII