/**
 * K sum问题：递归 + 双指针
 * 时间：64ms
 * 空间：33.8MB
 */
var combinationSum3 = function(K, targetSum) {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const results = []
  helper(nums, K, targetSum, [], results)
  return results
};

function helper (restNums, restK, restSum, tmpResult, results) {
  // 叶子结点：Two Sum问题，使用头尾指针法或者Hash法
  if (restK === 2) {
    let [L, R] = [0, restNums.length - 1]
    while (L < R) {
      const sum = restNums[L] + restNums[R]
      if (sum > restSum) {
        --R
      } else if (sum < restSum) {
        ++L
      } else {
        results.push(tmpResult.concat([restNums[L], restNums[R]]))
        --R
        ++L
      }
    }
    return
  }

  // 剪枝
  const [min, max] = [restNums[0], restNums[restNums.length - 1]]
  if (
    min * restK > restSum || // 最小值加起来都比target大
    max * restK < restSum // 或者，最大值加起来都比target小
  ) {
    // 就算了
    return
  }

  for (let i = 0; i < restNums.length; ++i) {
    const num = restNums[i]
    helper(
      restNums.slice(i + 1),
      restK - 1,
      restSum - num,
      tmpResult.concat(num),
      results
    )
  }
}

[
  [3, 7],
  [3, 9],
].forEach(input => {
  console.log(combinationSum3(...input))
})