/**
 * 手写快排
 * 
 * 时间：`O(NlogN)`
 */
var sortColors = function (nums) {
  quickSort(nums, 0, nums.length)
};

// 快排（原地修改）
function quickSort (nums, left, right) {
  if (right - left <= 1) return
  const i = partition(nums, left, right)
  quickSort(nums, left, i)
  quickSort(nums, i + 1, right)
}

function partition (arr, left, right) {
  const mid = left + right >>> 1
  swap(arr, left, mid)
  const pivot = arr[left]

  let lastSmall = left
  for (let i = left + 1; i < right; ++i) {
    if (arr[i] <= pivot) {
      ++lastSmall
      swap(arr, i, lastSmall)
    }
  }

  swap(arr, left, lastSmall)
  return lastSmall
}

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

module.exports = sortColors