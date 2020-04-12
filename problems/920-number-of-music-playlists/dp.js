/**
 * Bottom-up DP
 * 
 * 时间：O(LN) ~= O(1W), 176ms
 */
var numMusicPlaylists = function (N, L, K) {
  const MOD = 1e9 + 7;
  // 状态表示：dp[i][j]表示听的`i`首歌中有`j`种，的方案数
  const dp = Array.from({ length: L + 1 }, () => Array.from({ length: N + 1 }, () => 0));
  // 边界
  dp[0][0] = 1;
  // 迭代
  for (let i = 1; i <= L; ++i) {
    for (let j = 1; j <= i; ++j) { // 最多不超过`i`种
      // 策略1：添加没听过的歌
      // 因为已经之前听了`j-1`种歌，所以没听过的歌就是`N-(j-1)`
      dp[i][j] += dp[i - 1][j - 1] * (N - (j - 1));
      dp[i][j] %= MOD;

      // 策略2：添加听过的歌
      // 因为之前听了`j`种歌，但这首之前的`K`首/种歌是不能选的，所以是有`j-K`种选择（并且注意不能为负数）
      dp[i][j] += dp[i - 1][j] * Math.max(j - K, 0);
      dp[i][j] %= MOD;
    }
  }
  // 目标
  return dp[L][N];
};

module.exports = numMusicPlaylists;