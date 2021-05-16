/**
 * DP
 * 拓展：第一类stirling数
 */
var rearrangeSticks = function(n, k) {
  const mod = 1e9 + 7;
  // dp[i][j] 表示 放i个木棍、有j个被看见 的组合数
  const dp = Array.from({ length: n + 1 }, () => (
    Array.from({ length: k + 1 }, () => 0)
  ));
  dp[1][1] = 1;
  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= k; ++j) {
      dp[i][j] = (dp[i - 1][j - 1] + (i - 1) * dp[i - 1][j]) % mod;
    }
  }
  return dp[n][k];
};