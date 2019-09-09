/**
 * backtrack
 * 时间：160ms
 * 空间：37.1MB
 */
var combinationSum = function(candidates, target) {
  const results = []
  backtrack(candidates, target, [], 0, results)
  return results
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
      nums.slice(i), // 为了避免重复，下一个数字只能选这个或这个之后的
      targetSum, 
      tmpResult.concat(num), 
      tmpSum + num, 
      results
    )
  }
}

[
  [[2,3,6,7], 7],
  [[2,3,5], 8],
].forEach(input => {
  console.log(combinationSum(...input))
})