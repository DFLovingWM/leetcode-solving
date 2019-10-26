/**
 * 原地修改（类似快排中和pivot比较的过程）：设定头尾指针
 * O(N), 92ms
 */
var sortArrayByParity = function(A) {
  let L = 0
  let R = A.length - 1
  while (L < R) {
    while (L < R && isEven(A[L])) ++L
    swap(A, L, R)
    while (L < R && !isEven(A[R])) --R
    swap(A, L, R)
  }
  return A
};

function isEven (n) {
  return (n & 1) === 0
}

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

module.exports = sortArrayByParity