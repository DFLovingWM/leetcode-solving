/**
 * 二分查找：寻找下界
 * @param {T[]} arr 有序数组
 * @param {number} left 起点（包含，闭）
 * @param {number} right 终点（不包含，开）
 * @param {T} target 目标元素
 * @param {number} 目标元素(下界)的位置
 */
function bisectLeft (arr, left, right, target) {
  while (left < right) {
    let middle = left + Math.floor((right - left) / 2) // 这种写法可防止下标溢出
    if (target <= arr[middle]) {
      right = middle // 开
    } else {
      left = middle + 1 // 闭
    }
  }
  return left
}

function bisectRight (arr, left, right, target) {
  while (left < right) {
    let middle = left + Math.floor((right - left) / 2)
    if (target < arr[middle]) { // 区别在这里
      right = middle
    } else {
      left = middle + 1
    }
  }
  return left
}

module.exports = {
  bisectLeft,
  bisectRight
}
