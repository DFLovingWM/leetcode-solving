/**
 * Bottom-up: `dp[i]`表示到达`T`所需的最小步数
 * 
 * 时间：`O(TN)`, 64ms
 */
var videoStitching = function (clips, T) {
  const dp = Array.from({ length: T + 1 }, () => Infinity)
  dp[0] = 0

  for (let t = 1; t <= T; ++t) { // 遍历当前状态(T较小，不需要离散化)
    for (const [start, end] of clips) {
      if (
        end >= t && // 可行解(能拼接)
        start <= T // (也可以是`start <= t`。这里start判断也是为了防止数组越界，因为数组只开到了T，但有些时间段会超过T)
      ) {
        dp[t] = Math.min(dp[t], dp[start] + 1) // 最优解(最少步数)
      }
    }
  }

  return dp[T] === Infinity ? -1 : dp[T]
};

module.exports = videoStitching