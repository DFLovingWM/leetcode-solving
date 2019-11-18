/**
 * Bottom-up DP（未优化版本，超时）
 */
var jobScheduling = function (startTimes, endTimes, profits) {
  const jobs = []
  const n = startTimes.length
  for (let i = 0; i < n; ++i) {
    jobs.push([startTimes[i], endTimes[i], profits[i]])
  }
  jobs.sort((a, b) => a[1] - b[1]) // 排序：结束时间(升序)

  // dp[i]表示以`i`结尾的最大收益
  const dp = Array.from({ length: n }, () => 0)
  let res = 0
  
  for (let i = 0; i < n; ++i) {
    // 单独做这个兼职(初始状态)
    dp[i] = jobs[i][2]
    // 找前面的连在一起
    for (let j = i - 1; j >= 0; --j) {
      if (jobs[i][0] >= jobs[j][1]) { // 不冲突
        dp[i] = Math.max(dp[i], dp[j] + jobs[i][2])
      }
    }
    // 记录最大值
    res = Math.max(res, dp[i])
  }

  return res
};

module.exports = jobScheduling