/**
 * `dp[i]`表示`i`个区间能到达的最远距离
 * 
 * 时间：`O(N^2)`, 80ms
 */
var videoStitching = function (clips, T) {
  const n = clips.length
  const dp = Array.from({ length: n + 1 }, () => 0)

  for (let i = 1; i <= n; ++i) {
    for (const [start, end] of clips) {
      if (start <= dp[i - 1]) { // 该区间能接上
        dp[i] = Math.max(dp[i], end)
      }
    }
  }

  // 找最小步数
  let res = -1
  for (let i = 0; i <= n; ++i) {
    if (dp[i] >= T) {
      res = i
      break
    }
  }
  return res
};

module.exports = videoStitching