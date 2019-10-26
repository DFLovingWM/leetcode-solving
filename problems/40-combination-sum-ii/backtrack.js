/**
 * backtrack，因为有重复元素，所以需要提前排序
 * 时间：168ms
 * 空间：37.3MB
 */
var combinationSum2 = function(candidates, target) {
  // 排序
  candidates = candidates.slice().sort()

  const results = []
  backtrack(candidates, target, [], 0, results)
  return results
};

function backtrack (restNums, targetSum, tmpResult, tmpSum, results) {
  if (targetSum === tmpSum) {
    results.push(tmpResult)
    return
  }
  if (tmpSum > targetSum) return
  
  for (let i = 0; i < restNums.length; ++i) {
    if (i > 0 && restNums[i] === restNums[i - 1]) {
      // 避免重复
      continue
    }

    backtrack(
      restNums.slice(i + 1),
      targetSum,
      tmpResult.concat(restNums[i]),
      tmpSum + restNums[i],
      results
    )
  }
}

[
  [[10,1,2,7,6,1,5], 8],
  [[2,5,2,1,2], 5],
].forEach(input => {
  console.log(combinationSum2(...input))
})