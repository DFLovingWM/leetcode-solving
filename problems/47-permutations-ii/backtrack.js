/**
 * 回溯
 */
var permuteUnique = function (nums) {
  nums = nums.slice().sort((a, b) => a - b) // 排序，使重复元素相邻
  const res = []

  function backtrack (restNums, acc) {
    if (acc.length === nums.length) {
      res.push(acc)
      return
    }

    for (let i = 0; i < restNums.length; ++i) {
      if (i === 0 || restNums[i] !== restNums[i - 1]) { // 避免重复
        backtrack([...restNums.slice(0, i), ...restNums.slice(i + 1)], acc.concat(restNums[i]))
      }
    }
  }

  backtrack(nums, [])
  return res
};

module.exports = permuteUnique