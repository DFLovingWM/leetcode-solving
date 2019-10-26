/**
 * 动态规划，设dp[i]为加入第i个区间后，最多的不相交区间数
 * 时间：O(N^2), 400ms
 */
var eraseOverlapIntervals = function(intervals) {
  const n = intervals.length
  if (n === 0) return 0

  intervals = intervals.slice().sort((a, b) => a[0] - b[0])

  const dp = Array.from({ length: n }, () => 0)
  dp[0] = 1
  let res = dp[0]

  for (let i = 1; i < n; ++i) {
    // 寻找之前不相交的区间中，最大的那个
    let max = 0
    for (let j = i - 1; j >= 0; --j) {
      if (intervals[i][0] >= intervals[j][1]) {
        max = Math.max(max, dp[j])
      }
    }

    dp[i] = max + 1
    res = Math.max(res, dp[i])
  }

  return n - res
};

module.exports = eraseOverlapIntervals