/**
 * 快速排序：相对指针法
 */
function quickSort (arr) {
  recursiveQuickSort(arr, 0, arr.length - 1)
  return arr
}

/**
 * 递归函数
 * @param {Number[]} arr 目标数组
 * @param {Number} left 左边界(有效)
 * @param {Number} right 右边界(有效)
 * @returns {void} 无返回值。“原地修改”数组
 */
function recursiveQuickSort (arr, left, right) {
  if (right - left + 1 <= 1) { // 数量小于1就不必继续递归了
    return
  }

  let L = left,
      R = right
  let pivot = arr[R] // 选定这一轮迭代的pivot：只能选最左或最右的元素，使其变成空位。这里使R变为空位

  while (L < R) {
    while (L < R && arr[L] <= pivot) ++L
    arr[R] = arr[L] // 此时轮到L位置为空位
    
    while (L < R && arr[R] > pivot) --R
    arr[L] = arr[R] // 此时又轮到R位置为空位
  }

  // 到这里时有：L=R
  arr[R] = pivot // 将pivot放回去(放到现有空位中)

  // 递归
  recursiveQuickSort(arr, left, R - 1)
  recursiveQuickSort(arr, R + 1, right)
}

module.exports = quickSort