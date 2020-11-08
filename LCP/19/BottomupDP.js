/**
 * DP
 * 
 * 时间：O(N), 508ms
 */
function minimumOperations(leaves) {
  const n = leaves.length;
  const [R, RY, RYR] = [0, 1, 2];

  // dp[i][mode]：前`i`个叶子中，模式为[R, RY, RYR]的最小翻转数目
  const dp = Array.from({ length: n + 1 }, () => [Infinity, Infinity, Infinity]);

  // 边界
  dp[0] = [0, 0, 0];

  // 迭代
  for (let i = 1; i <= n; ++i) {
    const ch = leaves[i - 1];
    dp[i][R] = dp[i - 1][R] + (ch === 'r' ? 0 : 1);
    if (i >= 2) {
      dp[i][RY] = Math.min(
        dp[i - 1][RY] + (ch === 'y' ? 0 : 1),
        dp[i - 1][R] + (ch === 'y' ? 0 : 1)
      );
    }
    if (i >= 3) {
      dp[i][RYR] = Math.min(
        dp[i - 1][RYR] + (ch === 'r' ? 0 : 1),
        dp[i - 1][RY] + (ch === 'r' ? 0 : 1)
      );
    }
  }
  
  // 目标
  return dp[n][RYR];
};

module.exports = minimumOperations;