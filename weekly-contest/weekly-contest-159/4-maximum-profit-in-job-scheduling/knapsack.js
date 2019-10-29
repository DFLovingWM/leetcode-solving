/**
 * 背包DP
 * 参考：https://leetcode.com/problems/maximum-profit-in-job-scheduling/discuss/408964/Knapsack-DP-solution
 * 
 * 时间：O(N^2), 120ms
 */
var jobScheduling = function (startTimes, endTimes, profits) {
  const n = startTimes.length
  const jobs = []
  for (let i = 0; i < n; ++i) {
    jobs.push(new Job(startTimes[i], endTimes[i], profits[i]))
  }

  jobs.sort((a, b) => a.end - b.end) // 排序：结束时间升序

  const dp = new Array(n + 1).fill(0) // 递增DP数组
  for (let i = 1; i <= n; ++i) {
    dp[i] = Math.max(dp[i - 1], dp[getLatestValid(jobs, i - 1) + 1] + jobs[i - 1].profit)
  }

  // console.log(dp)
  return dp[n]
};

function Job(start, end, profit) {
  this.start = start
  this.end = end
  this.profit = profit
}

function Earn(end, profit) {
  this.end = end
  this.profit = profit
}

function getLatestValid (jobs, newIndex) {
  for (let i = newIndex - 1; i >= 0; --i) {
    if (jobs[i].end <= jobs[newIndex].start) return i
  }
  return -1
}

module.exports = jobScheduling