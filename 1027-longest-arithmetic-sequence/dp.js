/**
 * 最长等差子序列，动态规划：
 * 设`dp[end][diff]`为到`end`下标为止，相差为`diff`的最长长度，则有：
 * dp[end][diff] = max( dp[end][diff], dp[begin][diff] + 1 )
 * 
 * - Time: O(N2), 1540ms
 * - Space: O(N * M) = O(N2), M为diff的数量的最大值，其实就是N
 * 
 * 好题
 */
var longestArithSeqLength = function(arr) {
  let { length } = arr
  let dp = Array.from({ length }, () => {
    return {} // 因为第2维是diff、范围很大，不能用数组，要用hash
  })
  let result = -Infinity
  
  // 关键：二重循环的方式(j从 i+1 开始)
  for (let i = 0; i < length; ++i) {
    for (let j = i + 1; j < length; ++j) {
      let diff = arr[j] - arr[i]

      // 更新该位置的最长长度
      dp[j][diff] = Math.max(
        dp[j][diff] || 1, // 该位置至少是1
        (dp[i][diff] || 1) + 1 // 能接龙 || 不能接龙
      )

      // 同时记录最终结果(全局最长长度)
      result = Math.max(result, dp[j][diff])
    }
  }

  return result
};

[
  [3,6,9,12],
  [9,4,7,2,10],
  [20,1,15,3,10,5,8]
].forEach(arr => {
  console.log(longestArithSeqLength(arr))
})
