/**
 * 题意：每种数字无限，求和，和[39. 组合总和(无限)](https://leetcode-cn.com/problems/combination-sum/)差不多，只是与顺序有关
 * 思路：backtrack
 * 结果：TLE
 */
var combinationSum4 = function(nums, target) {
  const results = []
  backtrack(nums, target, [], 0, results)
  return results.length
};

function backtrack (nums, targetSum, tmpResult, tmpSum, results) {
  if (tmpSum >= targetSum) {
    if (tmpSum === targetSum) {
      results.push(tmpResult)
    }
    return
  }

  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i]
    backtrack(
      nums, // 为了避免重复，下一个数字只能选这个或这个之后的
      targetSum, 
      tmpResult.concat(num), 
      tmpSum + num, 
      results
    )
  }
}

[
  [[1, 2, 3], 4],
  [[4,2,1], 32]
].forEach(input => {
  console.log(combinationSum4(...input))
})