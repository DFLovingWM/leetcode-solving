/**
 * Bottom-up DP：`dp[n]`表示n个结点构成的不同BST的数量，则有：
 * dp[n] = dp[0] * dp[n-1] + dp[1] * dp[n-2] + ... + dp[n-1] * dp[0]
 * 
 * 时间：O(N^2), 64ms
 */
var numTrees = function (N) {
  const dp = Array.from({ length: N + 1 }, () => 0)
  dp[0] = dp[1] = 1
  for (let i = 2; i <= N; ++i) {
    for (let j = 0; j < i; ++j) {
      dp[i] += dp[j] * dp[i - 1 - j]
    }
  }
  return dp[N]
};

module.exports = numTrees