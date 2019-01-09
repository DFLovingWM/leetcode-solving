/**
 * DFS [80ms]
 */
function permuteUnique (nums) {
  const results = []
  
  function dfs (remainingNums, acc = []) {
    if (remainingNums.length === 1) {
      acc.push(remainingNums[0])
      results.push(acc)
      return
    }

    for (let i = 0; i < remainingNums.length; ++i) {
      if (i === 0 || remainingNums[i] !== remainingNums[i - 1]) { // 关键！去重
        dfs(
          [...remainingNums.slice(0, i), ...remainingNums.slice(i + 1)],
          acc.concat(remainingNums[i])
        )
      }
    }
  }

  // 排序
  nums.sort()

  // 递归
  dfs(nums)

  return results
}

module.exports = permuteUnique