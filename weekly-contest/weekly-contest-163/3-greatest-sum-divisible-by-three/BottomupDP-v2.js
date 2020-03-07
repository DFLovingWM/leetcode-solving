/**
 * Bottom-up DP（推导方向：curr => next）
 * 
 * 时间：O(N), 244ms
 * 空间：O(N), 56.7MB
 */
var maxSumDivThree = function (nums) {
  const n = nums.length;

  // dp[i][r]表示前i个数中，余数为r的最大和
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: 3 }, () => -Infinity));
  // 边界
  dp[0][0] = 0;
  // 迭代
  for (let i = 1; i <= n; ++i) {
    for (let k = 0; k < 3; ++k) {
      const num = nums[i - 1];
      const nextK = (k + num) % 3;
      dp[i][nextK] = Math.max(
        dp[i - 1][nextK], // 不取
        dp[i - 1][k] + num // 取
      );
    }
  }
  // 目标
  return dp[n][0];
};

module.exports = maxSumDivThree;