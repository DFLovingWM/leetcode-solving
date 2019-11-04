/**
 * 快速选择法
 * 
 * 时间：`O(N)`, 64ms
 * 空间：`O(1)`
 */
var findKthLargest = function (arr, kLargest) {
  let [left, right] = [0, arr.length]
  let kSmallest = arr.length - kLargest // 第`K`大 = 第`N-K`小（注意下标从0开始）

  while (true) {
    const i = partition(arr, left, right)
    if (i === kSmallest) return arr[i]
    if (kSmallest < i) {
      right = i
    } else {
      left = i + 1
    }
  }
};

// O(N)
function partition (arr, left, right) {
  const mid = left + right >>> 1
  swap(arr, left, mid)
  const pivot = arr[left]
  let lastSmall = left
  for (let i = left + 1; i < right; ++i) {
    if (arr[i] <= pivot) { // 注：这里`<`或者`<=`都可以
      swap(arr, ++lastSmall, i)
    }
  }
  swap(arr, left, lastSmall)
  return lastSmall
}

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

module.exports = findKthLargest