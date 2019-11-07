/**
 * 递归版（返回新数组）
 * 
 * 时间：`O(NlogN)`
 * 空间：`O(NlogN)`，因为每次递归都返回新数组
 */
module.exports = function (arr) {
  return mergeSort(arr, 0, arr.length)
}

function mergeSort (arr, left, right) {
  if (right - left <= 1) return arr.slice(left, right)

  // 递归
  const mid = Math.floor((left + right) / 2)
  const A = mergeSort(arr, left, mid)
  const B = mergeSort(arr, mid, right)

  return merge(A, B)  
}

// 合并2个有序数组
function merge (A, B) {
  const res = []
  let [a, b] = [0, 0]
  while (a < A.length && b < B.length) {
    if (A[a] < B[b]) {
      res.push(A[a++])
    } else {
      res.push(B[b++])
    }
  }
  while (a < A.length) res.push(A[a++])
  while (b < B.length) res.push(B[b++])
  return res
}