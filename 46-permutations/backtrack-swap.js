/**
 * 回溯（使用数组 + 交换）
 * 
 * 时间：80ms
 */
var permute = function (nums) {
  const res = []

  /**
   * 递归函数
   * @param {number} start 从该位置开始挑选
   * @param {number[]} acc 当前排列
   */
  function backtrack (start, acc) {
    if (acc.length === nums.length) {
      res.push(acc.slice())
      return
    }

    for (let i = start; i < nums.length; ++i) {
      acc.push(nums[i])
      swap(nums, i, start)
      backtrack(start + 1, acc)
      // 回溯
      swap(nums, i, start)
      acc.pop()
    }
  }

  backtrack(0, [])
  return res
};

// 在数组中交换不同位置上的元素
function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

module.exports = permute