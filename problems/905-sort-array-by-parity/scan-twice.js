/**
 * 先挑偶数、再挑奇数
 * O(2N)=O(N)，96ms
 */
var sortArrayByParity = function(A) {
  const res = []

  // 偶数
  for (const n of A) {
    if ((n & 1) === 0) res.push(n)
  }

  // 奇数
  for (const n of A) {
    if (n & 1) res.push(n)
  }

  return res
};

module.exports = sortArrayByParity