/**
 * 快排(v1)：选定pivot，比它小的扔到左半部(A)，大的扔右半部(B)
 */
function quickSort (arr) {
  helper(arr, 0, arr.length)
  return arr
}

// 递归函数
function helper (arr, left, right) {
  if (right - left <= 1) { // 递归终止条件(叶子结点)，需要控制好
    return
  }

  let pivotIndex = Math.floor((left + right) / 2),
      pivot = arr[pivotIndex]

  // 将pivot交换到head
  swap(arr, pivotIndex, left)

  // 遍历，将比pivot小的swap到左边
  let lastSmall = left // 记录A部分tail的下标(初始值意为不存在A部分)
  for (let i = lastSmall + 1; i < right; ++i) {
    if (arr[i] < pivot) {
      ++lastSmall
      swap(arr, i, lastSmall)
    }
  }

  // 将pivot放回“相对中间”位置
  swap(arr, left, lastSmall)

  // 对左右部分进行递归
  // pivot不参与下一层迭代，是为了防止死循环(具体来说，2=>0+2)
  helper(arr, left, lastSmall)
  helper(arr, lastSmall + 1, right)
}

function swap (arr, i, j) {
  [ arr[i], arr[j] ] = [ arr[j], arr[i] ]
}

module.exports = quickSort