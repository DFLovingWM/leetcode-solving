/**
 * DP
 * 
 * 时间：O(N^3)
 */
var maxSizeSlices = function (slices) {
  const n = slices.length;
  // 因为头尾相连，所以需要循环2次
  return Math.max(
    run(slices.slice(0, n - 1)),
    run(slices.slice(1))
  );
}

function run(slices) {
  const N = slices.length;
  const K = Math.ceil(N / 3);
  // 状态表示：dp[i][k]表示在前i块蛋糕中选出k块的最大和
  const dp = Array.from({ length: N + 1 }, () => Array.from({ length: K + 1 }, () => -Infinity));
  // 边界
  for (let i = 0; i <= N; ++i) {
    dp[i][0] = 0;
  }
  // 迭代
  let res = 0;
  for (let i = 1; i <= N; ++i) {
    for (let k = 1; k <= K; ++k) {
      dp[i][k] = Math.max(
        i-2 >= 0 ? dp[i-2][k-1] + slices[i-1] : slices[i-1], // 选择slice[i-1]
        dp[i-1][k] // 放弃slice[i-1]
      );
      res = Math.max(res, dp[i][k]);
    }
  }
  // 目标
  return res;
};