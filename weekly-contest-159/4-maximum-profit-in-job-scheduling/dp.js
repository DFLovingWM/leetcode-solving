/**
 * 排序 + DP
 * 参考[lee215的题解](https://leetcode.com/problems/maximum-profit-in-job-scheduling/discuss/409009/JavaC%2B%2BPython-DP-Solution)
 * 
 * 时间：O(NlogN), 176ms
 */
var jobScheduling = function (startTimes, endTimes, profits) {
  const n = startTimes.length
  const jobs = []
  for (let i = 0; i < n; ++i) {
    jobs.push([startTimes[i], endTimes[i], profits[i]])
  }

  // 按照结束时间升序
  jobs.sort((a, b) => a[1] - b[1])

  const chosen = [[0, 0]]
  for (const [start, end, profit] of jobs) {
    // 二分查找：查找end <= 当前start
    // 这里维护了一个升序数组（end是递增的，收益也是递增的）
    const i = bisectRight(chosen, start, 0, chosen.length) - 1
    const prev = chosen[i]
    const newProfit = prev[1] + profit
    if (newProfit > chosen[chosen.length - 1][1]) {
      chosen.push([end, newProfit])
    }
  }
  return chosen[chosen.length - 1][1]
};

// 二分查找(右开边界，因为相等时，尽量往右边找profit更大的)
function bisectRight (arr, startTime, left, right) {
  while (left < right) {
    const mid = left + (right - left >> 1)

    if (startTime >= arr[mid][0]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
}

module.exports = jobScheduling