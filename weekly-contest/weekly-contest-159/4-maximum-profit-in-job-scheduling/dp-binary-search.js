/**
 * Bottom-up DP + 二分查找
 * 参考[lee215的题解](https://leetcode.com/problems/maximum-profit-in-job-scheduling/discuss/409009/JavaC%2B%2BPython-DP-Solution)
 * 
 * 时间：`O(NlogN)`, 184ms
 */
var jobScheduling = function (startTimes, endTimes, profits) {
  const jobs = []
  const n = startTimes.length
  for (let i = 0; i < n; ++i) {
    jobs.push([startTimes[i], endTimes[i], profits[i]])
  }
  jobs.sort((a, b) => a[1] - b[1]) // 排序：结束时间(升序)

  const dp = []
  dp.push([-1, 0, 0]) // 初始状态

  for (const [start, end, profit] of jobs) {
    const prevDP = dp[bisectRight(dp, start, 0, dp.length) - 1]
    const newProfit = prevDP[2] + profit
    if (newProfit > dp[dp.length - 1][2]) {
      dp.push([-1, end, newProfit])
    }
  }

  return dp[dp.length - 1][2]
};

function bisectRight (arr, x, left, right) {
  while (left < right) {
    const mid = left + (right - left >>> 1)
    if (x >= arr[mid][1]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}

module.exports = jobScheduling