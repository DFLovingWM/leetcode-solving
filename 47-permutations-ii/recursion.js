/**
 * 回溯 + 剪枝（去重）
 * 时间：160ms
 * 空间：37.7MB
 */
var permuteUnique = function(nums) {
  nums = nums.slice().sort((a, b) => a - b)

  const results = []
  helper(nums, [], results)
  return results
};

/**
 * 递归单元
 */
function helper (restNums, result, results) {
  if (!restNums.length) {
    results.push(result)
    return
  }

  for (let i = 0; i < restNums.length; ++i) {
    if (i === 0 || restNums[i] !== restNums[i - 1]) { // 剪枝
      helper(
        restNums.slice(0, i).concat(restNums.slice(i + 1)),
        result.concat(restNums[i]),
        results
      )
    }
  }
}
