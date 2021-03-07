/**
 * DP
 * 时间：O(K * 2^10 * )
 */
var minChanges = function(nums, k) {
  const n = nums.length;
  const V = 1 << 10;
  // dp[i][v] 表示处理到第 i 组时，XOR 值为 v 的最小修改数
  const dp = Array.from({ length: k }, (
    () => Array.from({ length: V }, () => (
      Infinity
    ))
  ));
  for (let i = 0; i < k; ++i) {
    for (let v = 0; v < V; ++v) {
      
    }
  }
  return dp[k][0];
};