/**
 * DP + 反向更新
 * 时间：O(N^2)
 * 空间：O(K)
 */
var getRow = function(k) {
  const dp = Array.from({ length: k + 1 }, () => 0);
  // 第0行
  dp[0] = 1;
  // 从第1行开始
  for (let r = 1; r <= k; ++r) {
    for (let c = r; c >= 1; --c) {
      dp[c] += dp[c - 1];
    }
  }
  return dp;
};

module.exports = getRow;
