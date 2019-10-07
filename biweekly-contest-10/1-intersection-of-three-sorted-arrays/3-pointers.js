/**
 * 3指针
 * 
 * 时间：O(N), 60ms
 * 空间：O(1)
 */
var arraysIntersection = function (A, B, C) {
  let [a, b, c] = [0, 0, 0]
  const common = []
  
  while (a < A.length && b < B.length && c < C.length) {
    if (A[a] === B[b] && A[a] === C[c]) {
      common.push(A[a])
      ++a
      ++b
      ++c
      continue
    }

    const min = Math.min(A[a], B[b], C[c])
    if (A[a] === min) {
      ++a
    }
    if (B[b] === min) {
      ++b
    }
    if (C[c] === min) {
      ++c
    }
  }

  return common
};

module.exports = arraysIntersection