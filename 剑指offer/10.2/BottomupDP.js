/**
 * Bottom-up DP
 * 
 * 时间：O(N)
 * 空间：O(N)
 */
var numWays = function (n) {
  const MOD = 1e9 + 7;
  const dp = Array.from({ length: n + 1 }, () => 0); // dp[i]表示跳到i的方案数
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; ++i) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % MOD; // 想到达`i`，可以是从`i-2`调过来、也可以是从`i-1`调过来，所以是这两种的方案数之和
  }
  return dp[n];
};