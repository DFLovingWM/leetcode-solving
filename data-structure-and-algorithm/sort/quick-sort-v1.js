/**
 * 快速排序：同向指针法
 */
function quickSort (arr) {
  recursiveQuickSort(arr, 0, arr.length)
  return arr
}

/**
 * 递归函数
 * @param {Number[]} arr 目标数组
 * @param {Number} left 左边界，合法下标
 * @param {Number} right 右边界，不合法下标
 * @returns {void} 无返回值。“原地修改”数组
 */
function recursiveQuickSort (arr, left, right) {
  if (right - left <= 1) { // 如果个数最多为1，那不必继续了
    return
  }

  let pivotIndex = Math.floor((left + right) / 2),
      pivot = arr[pivotIndex]
  swap(arr, pivotIndex, left) // 将pivot交换到最左边(注意当前递归层对应的数组范围，所谓“最左”是left，不是0)

  /*
   * [小于pivot的部分]记为A，[大于pivot的部分]记为B
   * 一开始A为空，接下来需要遍历数组，将比pivot小的扔进A中
   */
  let lastSmall = left
  for (let i = left; i < right; ++i) {
    if (arr[i] < pivot) { // 小于pivot的，扔进A中
      ++lastSmall
      swap(arr, lastSmall, i)
    }
  }
  swap(arr, lastSmall, left) // pivot是中间值，需要放回“中间”位置

  // 递归
  recursiveQuickSort(arr, left, lastSmall)
  recursiveQuickSort(arr, lastSmall + 1, right)
    
}

function swap (arr, i, j) {
  [ arr[i], arr[j] ] = [ arr[j], arr[i] ]
}

module.exports = quickSort