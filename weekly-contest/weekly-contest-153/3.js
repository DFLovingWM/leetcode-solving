/**
 * dp[i][rest]表示到了前i个元素，剩余rest次删除机会的最优值（最大结果）
 */
var maximumSum = function(arr) {
  if (arr.length === 1) {
    return arr[0]
  }

  const dp = Array.from({ length: arr.length + 1 }, () => {
    return Array.from({ length: 2 }, () => {
      return -Infinity
    })
  })
  dp[0][0] = dp[0][1] = 0
  dp[1][0] = dp[1][1] = arr[0]

  let res = -Infinity
  for (let i = 2; i <= arr.length; ++i) {
    dp[i][0] = Math.max(
      arr[i - 1],
      dp[i - 1][0] + arr[i - 1],
      dp[i - 2][1] + arr[i - 1]
    )
    dp[i][1] = Math.max(
      arr[i - 1],
      dp[i - 1][1] + arr[i - 1]
    )

    res = Math.max(res, ...dp[i])
  }
  // console.log(dp)
  return res
};

[
  [-50],
  [1,-2,0,3],
  [1,-2,-2,3],
  [-1,-1,-1,-1],
  [2,1,-2,-5,-2],
  [8,-1,6,-7,-4,5,-4,7,-6],
].forEach(arr => {
  console.log(maximumSum(arr))
})