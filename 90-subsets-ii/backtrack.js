/**
 * 回溯
 */
var subsetsWithDup = function (nums) {
  nums = nums.slice().sort((a, b) => a - b) // 排序以让重复元素相邻
  const res = []

  function backtrack (start, acc) {
    res.push(acc.slice())

    for (let i = start; i < nums.length; ++i) {
      if (i === start || nums[i] !== nums[i - 1]) { // 去重（重复元素）
        acc.push(nums[i])
        backtrack(i + 1, acc) // 去重（禁止向前访问）
        acc.pop()
      }
    }
  }

  backtrack(0, [])
  return res
};

module.exports = subsetsWithDup