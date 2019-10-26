/**
 * simple是排序
 * 但其实不需要排序，因为后半段是个逆序数组，只要reverse就好了，不必重新排序
 * 
 * 时间复杂度：O(N)
 */
function nextPermutation (arr) {
  let i
  for (i = arr.length - 1; i >= 1; --i) {
    if (arr[i] > arr[i - 1]) {
      break
    }
  }

  // 此时i为逆序数组的head位置
  let head = i

  if (head === 0) { // 如果整个就是个逆序数组，那next permutation就是整体的第一个排列(正序数组)
    reverse(arr)
    return
  }

  let pivot = arr[head - 1]
  for (let j = arr.length - 1; j >= head; --j) {
    if (arr[j] > pivot) {
      targetIndex = j
      break // 找到第一个大于pivot的(刚好大于pivot)
    }
  }
  swap(arr, head - 1, targetIndex)
  reverse(arr, head)
}

function reverse (arr, left = 0, right = arr.length) {
  if (right - left <= 1) return

  let stop = left + Math.floor((right - left) / 2)
  for (let i = left; i < stop; ++i) {
    swap(arr, i, left + right - 1 - i)
  }
}

function swap (arr, i, j) {
  [ arr[i], arr[j] ] = [ arr[j], arr[i] ]
}

module.exports = nextPermutation