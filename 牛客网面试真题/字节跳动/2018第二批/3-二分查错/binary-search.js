/**
 * 正确写法：类似bisectRight
 */
function binarySearch (data, target) {
  let [left, right] = [0, data.length]

  while (left < right) {
    const mid = left + (right - left >>> 1)
    if (target < data[mid]) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  // 此时left、right相等，随便用一个
  let res = -1
  if (data[right - 1] === target) {
    res = right - 1
  }
  return res
}

/**
 * 综上，题目所含错误有：
 * 1. 当`target < data[mid]时`，应该是`right = mid`，右边界为开区间
 * 2. 最终判断相等时，条件应该是`data[right-1] === target`，并且返回值也应该是`right-1`
 */