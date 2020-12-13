/**
 * 排序 + DP
 * 
 * 时间：O(N^2), 92ms
 */
var maxHeight = function(cuboids) {
  // 调整长宽高
  for (const cuboid of cuboids) {
    cuboid.sort((a, b) => a - b);
  }

  // 排序（为之后的DP作准备）
  cuboids.sort((A, B) => {
    return A[0] - B[0] || A[1] - B[1] || A[2] - B[2];
  });

  // dp[i]表示取cuboids[i]、最终能达到的最大高度
  const n = cuboids.length;
  const dp = Array.from({ length: n }, () => 0);
  let res = 0;
  for (let i = 0; i < n; ++i) {
    const curr = cuboids[i];
    dp[i] = curr[2]; // 初始值
    for (let j = 0; j < i; ++j) { // 寻找上一个
      const prev = cuboids[j];
      if (curr[0] >= prev[0] && curr[1] >= prev[1] && curr[2] >= prev[2]) {
        dp[i] = Math.max(dp[i], dp[j] + curr[2]);
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};

module.exports = maxHeight;