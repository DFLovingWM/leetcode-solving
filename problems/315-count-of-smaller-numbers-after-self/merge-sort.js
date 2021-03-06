/**
 * 归并排序
 * 
 * 时间：O(NlogN), 112ms
 */
var countSmaller = function (nums) {
  nums = nums.slice().map((n, i) => ({
    value: n,
    index: i
  }))
  const res = new Array(nums.length).fill(0)

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
      while (r < right && A[l - left].value > B[r - mid].value) ++r
      res[A[l - left].index] += r - mid
    }

    // 合并有序数组
    const C = []
    let a = 0, b = 0
    while (a < A.length && b < B.length) {
      if (A[a].value < B[b].value) {
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

module.exports = countSmaller