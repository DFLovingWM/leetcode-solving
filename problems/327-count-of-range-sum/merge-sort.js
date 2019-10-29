/**
 * 前缀和 + 归并排序
 * 
 * 时间：O(NlogN), 104ms
 */
var countRangeSum = function (nums, lower, upper) {
  const sums = [0] // 前缀和数组
  for (let i = 0; i < nums.length; ++i) {
    sums[i + 1] = sums[i] + nums[i]
  }

  let res = 0

  // 归并排序
  function mergeSort (left, right) {
    if (right - left <= 1) return sums.slice(left, right)

    // 分两半
    const mid = left + (right - left >> 1)
    const A = mergeSort(left, mid)
    const B = mergeSort(mid, right)

    // [lower, upper] = upper] - lower)
    let [r1, r2] = [mid, mid]
    for (let l = left; l < mid; ++l) {
      while (r1 < right && B[r1 - mid] - A[l - left] < lower) ++r1
      while (r2 < right && B[r2 - mid] - A[l - left]<= upper) ++r2
      res += (r2 - mid) - (r1 - mid)
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

  mergeSort(0, sums.length)
  return res
};

module.exports = countRangeSum