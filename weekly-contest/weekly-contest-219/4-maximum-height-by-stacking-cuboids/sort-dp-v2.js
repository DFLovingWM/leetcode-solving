/**
 * 排序 + DP
 * 
 * 时间：O(N^2), 156ms
 */
var maxHeight = function(cuboids) {
  const arr = [];
  for (const [i, [a, b, c]] of cuboids.entries()) {
    // 对于每个长方体，考虑所有情况（6种）
    // 元素格式：[edge1, edge2, edge3, index]，index用以避免重复
    arr.push([a, b, c, i]);
    arr.push([a, c, b, i]);
    arr.push([b, a, c, i]);
    arr.push([b, c, a, i]);
    arr.push([c, a, b, i]);
    arr.push([c, b, a, i]);
  }

  arr.sort((A, B) => {
    return A[0] - B[0] || A[1] - B[1] || A[2] - B[2];
  });

  // dp[i]表示取arr[i]、最终能达到的最大高度
  const n = arr.length;
  const dp = Array.from({ length: n }, () => 0);
  let res = 0;
  for (let i = 0; i < n; ++i) {
    const curr = arr[i];
    dp[i] = curr[2]; // 初始值
    for (let j = 0; j < i; ++j) { // 寻找上一个
      const prev = arr[j];
      if (
        curr[0] >= prev[0] && curr[1] >= prev[1] && curr[2] >= prev[2] &&
        curr[3] !== prev[3]
      ) {
        dp[i] = Math.max(dp[i], dp[j] + curr[2]);
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};

module.exports = maxHeight;