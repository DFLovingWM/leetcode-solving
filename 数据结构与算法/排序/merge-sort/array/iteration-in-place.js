/**
 * 迭代版/自底向上（原地修改）
 * 
 * 时间：`O(NlogN)`
 * 空间：`O(N)`，主要是tmp数组
 */
module.exports = function mergeSort (arr) {
  const n = arr.length
  const tmp = new Array(n)

  for (let len = 1; len < n; len *= 2) { // 遍历线段“半长”
    for (let left = 0; left < n; left += len * 2) { // 遍历线段起点
      const right = Math.min(left + len * 2, n)
      merge(arr, tmp, left, right)
    }
  }
}

// 合并两个有序数组
function merge (arr, tmp, left, right) {
  const mid = Math.floor((left + right) / 2)
  let [a, b, i] = [left, mid, left]

  while (a < mid && b < right) {
    if (arr[a] < arr[b]) {
      tmp[i++] = arr[a++]
    } else {
      tmp[i++] = arr[b++]
    }
  }

  // 剩余
  while (a < mid) tmp[i++] = arr[a++]
  while (b < right) tmp[i++] = arr[b++]

  // 写回
  for (let i = left; i < right; ++i) arr[i] = tmp[i]
}