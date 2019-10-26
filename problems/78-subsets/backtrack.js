/**
 * 回溯
 * 
 * 时间：72ms
 */
var subsets = function (nums) {
  const res = []

  /**
   * 递归函数：从`start`开始遍历，挑选下一个元素
   * @param {number} start 开始下标
   * @param {number[]} acc 当前子集
   */
  function backtrack (start, acc) {
    // 加入答案
    res.push(acc.slice())

    // 找下一个数字（从start开始找，避免重复）
    for (let i = start; i < nums.length; ++i) {
      acc.push(nums[i])
      backtrack(i + 1, acc)
      acc.pop() // 回溯
    }
  }

  backtrack(0, [])
  return res
};

module.exports = subsets