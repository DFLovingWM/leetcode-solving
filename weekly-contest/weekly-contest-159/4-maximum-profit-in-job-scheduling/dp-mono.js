/**
 * Bottom-up DP（DP数组升序）
 * 参考：https://leetcode.com/problems/maximum-profit-in-job-scheduling/discuss/408964/Knapsack-DP-solution
 * 
 * 时间：远少于`O(N^2)`, 160ms
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

  for (let i = 0; i < n; ++i) {
    // 往前面找，第一个不冲突的（也是最大的）
    let j = i - 1
    for (; j >= 0; --j) {
      if (jobs[i][0] >= jobs[j][1]) break
    }

    if (j === -1) {
      dp[i] = Math.max(jobs[i][2], dp[Math.max(i - 1, 0)])
    } else {
      dp[i] = Math.max(dp[j] + jobs[i][2], dp[Math.max(i - 1, 0)])
    }
  }

  return dp[n - 1]
};

module.exports = jobScheduling