/**
 * Bottom-up DP
 * 
 * 时间：`O(N)`, 68ms
 */
var mincostTickets = function (days, costs) {
  const target = days[days.length - 1]
  const needTravel = new Set(days)

  // dp[i]表示覆盖到第i天所需的最少花费
  const dp = new Array(target + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= target; ++i) {
    if (!needTravel.has(i)) { // 不需要旅游，则不用花钱，跟昨天一样
      dp[i] = dp[i - 1]
    } else { // 需要旅游，选最小花费的策略
      dp[i] = Math.min(
        dp[Math.max(i - 1, 0)] + costs[0],
        dp[Math.max(i - 7, 0)] + costs[1],
        dp[Math.max(i - 30, 0)] + costs[2]
      )
    }
  }

  return dp[target]
};

module.exports = mincostTickets