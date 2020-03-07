/**
 * Bottom-up DP
 * 
 * 时间：O(N^2), 72ms
 * 空间：O(N), 35.3MB
 */
var cuttingRope = function (n) {
  const dp = Array.from({ length: n + 1 }, () => 0); // dp[i]表示长度为`i`的绳子被切开后能达到的最大乘积
  dp[0] = dp[1] = 1;
  for (let i = 2; i <= n; ++i) { // 长度
    for (let j = 1; j * 2 <= i; ++j) { // 分割点
      const tmp = Math.max(dp[j], j) * Math.max(dp[i - j], i - j);
      dp[i] = Math.max(dp[i], tmp);
    }
  }
  return dp[n];
};