/**
 * 双指针，参考：https://leetcode-cn.com/problems/sort-array-by-parity-ii/solution/an-qi-ou-pai-xu-shu-zu-ii-by-leetcode/
 * 好方法
 * 
 * 时间：O(N), 112ms
 * 空间：`O(1)`
 */
var sortArrayByParityII = function(arr) {
  let j = 1 // 奇数指针
  let i = 0 // 偶数指针

  // 目标：保证i上的都是偶数
  for (i = 0; i < arr.length; i += 2) {
    if (arr[i] & 1) { // 如果i上是奇数（不合法），准备与j交换

      // 但交换之前，让j也遇到一个不合法的数字（偶数）
      while (arr[j] & 1) j += 2

      // 交换后，两个不合法的值同时变得合法
      swap(arr, i, j)
      j += 2
    }
  }

  return arr
};

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

module.exports = sortArrayByParityII