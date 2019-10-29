/**
 * 归并排序，每次数个数
 */
var reversePairs = function (nums) {
  nums = nums.slice()
  let res = 0

  // 归并排序
  function mergeSort (left, right) {
    if (right - left <= 1) return nums.slice(left, right)

    // 分两半
    const mid = left + (right - left >> 1)
    const A = mergeSort(left, mid)
    const B = mergeSort(mid, right)

    // 数个数
    let r = mid
    for (let l = left; l < mid; ++l) {
      while (r < right && A[l - left] > 2 * B[r - mid]) ++r
      res += r - mid
    }

    // 合并有序数组
    const C = []
    let a = 0, b = 0
    while (a < A.length && b < B.length) {
      if (A[a] < B[b]) {
        C.push(A[a++])
      } else {
        C.push(B[b++])
      }
    }
    if (a < A.length) C.push(...A.slice(a))
    if (b < B.length) C.push(...B.slice(b))

    return C
  }

  mergeSort(0, nums.length)
  return res
};

module.exports = reversePairs