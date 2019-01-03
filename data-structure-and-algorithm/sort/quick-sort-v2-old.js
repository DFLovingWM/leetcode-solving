/**
 * 快排(v2)：双指针法
 */
function quickSort (arr) {
  helper(arr, 0, arr.length)
  return arr
}

/**
 * 递归函数
 * 重点关注！语句(1)(2)与pivot比较的地方，至少有一处要带上=号，否则(在相等值情况下)会引起死循环
 */
function helper (arr, left, right) {
  if (right - left <= 1) return

  let L = left,
      R = right - 1 // (注意：right是开区间，但R是合法下标，所以需要减1)

  let pivot = arr[left]

  while (L < R) {
    while (L < R && arr[R] > pivot) --R // (1)从右边开始找到比pivot小的值
    arr[L] = arr[R] // 交换到左边

    while (L < R && arr[L] <= pivot) ++L // (2)左边开始找比pivot大的值
    arr[R] = arr[L] // 交换到右边
  }

  arr[L] = pivot // 还原pivot

  // 递归
  helper(arr, left, L)
  helper(arr, L + 1, right)
}

module.exports = quickSort