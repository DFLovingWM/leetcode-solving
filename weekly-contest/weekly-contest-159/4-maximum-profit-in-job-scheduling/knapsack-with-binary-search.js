/**
 * 背包DP + 二分
 * 参考[lee215的题解](https://leetcode.com/problems/maximum-profit-in-job-scheduling/discuss/409009/JavaC%2B%2BPython-DP-Solution)
 * 
 * 时间：O(NlogN), 116ms
 */
var jobScheduling = function (startTimes, endTimes, profits) {
  const n = startTimes.length
  const jobs = []
  for (let i = 0; i < n; ++i) {
    jobs.push(new Job(startTimes[i], endTimes[i], profits[i]))
  }

  // 按照结束时间升序
  jobs.sort((a, b) => a.end - b.end)

  const earns = [new Earn(0, 0)]
  for (const job of jobs) {
    // 二分查找：查找end <= 当前start
    // 这里维护了一个关于“收益”的升序数组
    const prev = earns[binarySearch(earns, job.start, 0, earns.length)]
    const newProfit = prev.profit + job.profit
    if (newProfit > earns[earns.length - 1].profit) {
      earns.push(new Earn(job.end, newProfit))
    }
  }
  return earns[earns.length - 1].profit // 升序，tail就是max
};

// bisectRight
function binarySearch (earns, start, left, right) {
  while (left < right) {
    const mid = left + (right - left >> 1)
    if (start >= earns[mid].end) { // 满足(不冲突)，往右走
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left - 1
}

function Job (start, end, profit) {
  this.start = start
  this.end = end
  this.profit = profit
}

function Earn (end, profit) {
  this.end = end
  this.profit = profit
}

module.exports = jobScheduling