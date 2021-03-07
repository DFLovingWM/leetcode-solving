/**
 * 递归版（原地修改）
 * 
 * 时间：`O(NlogN)`
 * 空间：`O(N)`，主要是tmp数组
 */
module.exports = function (arr) {
  mergeSort(arr, arr.slice(), 0, arr.length)
}

// 需要一个tmp数组，作为临时写入
function mergeSort (arr, tmp, left, right) {
  if (right - left <= 1) return

  // 递归
  const mid = Math.floor((left + right) / 2)
  mergeSort(arr, tmp, left, mid)
  mergeSort(arr, tmp, mid, right)

  merge(arr, tmp, left, mid, right)
}

// 合并两个有序数组
function merge (arr, tmp, left, mid, right) {
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