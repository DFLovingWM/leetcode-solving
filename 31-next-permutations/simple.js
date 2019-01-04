/**
 * 找规律：从尾开始找逆序数组A和下一个位置B，将A中刚好大于B的数字代替B，然后排列成正序
 * 时间复杂度：O(NlogN)
 * [64ms]
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
    sort(arr)
    return
  }

  let pivot = arr[head - 1]
  let target, targetIndex = -1
  for (let j = head; j < arr.length; ++j) {
    if (
      (targetIndex === -1) ||
      (arr[j] > pivot && Math.abs(arr[j] - pivot) < Math.abs(target - pivot)) // 刚好大于pivot的数字
    ) {
      target = arr[j]
      targetIndex = j
    }
  }
  swap(arr, head - 1, targetIndex)
  sort(arr, head)
}

// 只使用O(1)空间的排序，可以使用插入排序
function sort (arr, left = 0, right = arr.length) {
  if (right - left <= 1) return

  for (let i = left + 1; i < right; ++i) {
    let temp = arr[i] // temp存储，此刻位置i为空位
    let pos = i - 1
    while (pos >= left && temp < arr[pos]) { // 升序，所以是小于
      --pos
    }
    ++pos

    for (let j = i - 1; j >= pos; --j) {
      arr[j + 1] = arr[j]
    }

    arr[pos] = temp
  }
}

function swap (arr, i, j) {
  [ arr[i], arr[j] ] = [ arr[j], arr[i] ]
}

module.exports = nextPermutation