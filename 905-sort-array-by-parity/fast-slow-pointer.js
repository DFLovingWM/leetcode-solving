/**
 * 原地修改（类似快排中和pivot比较的过程）：设定快慢指针，快指针探索，慢指针表示偶数区间的tail
 * O(N)，92ms
 */
var sortArrayByParity = function(A) {
  A = A.slice()
  let lastEven = -1 // 慢指针
  for (let i = 0; i < A.length; ++i) { // i为快指针
    if ((A[i] & 1) === 0) { // 如果是偶数，就往前面扔
      swap(A, ++lastEven, i)
    }
  }
  return A
};

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

module.exports = sortArrayByParity