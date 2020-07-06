/**
 * DP
 * 
 * 时间：O(MN)
 */
var maxDotProduct = function(A, B) {
  const aLen = A.length;
  const bLen = B.length;
  // 定义：dp[i][j]表示 A[:i]的子序列 与 B[:j]的等长子序列 的最大笛卡尔和
  const dp = Array.from({ length: aLen + 1 }, () => Array.from({ length: bLen + 1 }, () => -Infinity));
  // 边界
  for (let i = 0; i <= aLen; ++i) dp[i][0] = 0;
  for (let j = 0; j <= bLen; ++j) dp[0][j] = 0;
  // 迭代
  let res = -Infinity; // 目标
  for (let i = 1; i <= aLen; ++i) {
    for (let j = 1; j <= bLen; ++j) {
      res = Math.max(res, dp[i - 1][j - 1] + A[i - 1] * B[j - 1]);
      dp[i][j] = Math.max(
        dp[i - 1][j - 1],
        dp[i - 1][j - 1] + A[i - 1] * B[j - 1],
        dp[i - 1][j],
        dp[i][j - 1]
      );
    }
  }
  return res;
};

module.exports = maxDotProduct;
