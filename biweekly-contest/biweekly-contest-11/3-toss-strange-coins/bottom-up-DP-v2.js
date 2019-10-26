/**
 * Bottom-up DP：
 * `dp[i][j]`表示前i个硬币中j个向上的概率
 * 空间可以压缩到一维
 * 
 * 时间：O(N^2), 80ms
 * 空间：O(N)
 */
var probabilityOfHeads = function (probs, targetUp) {
  const n = probs.length
  const dp = new Array(targetUp + 1).fill(0)

  dp[0] = 1

  for (let i = 1; i <= n; ++i) {
    for (let j = Math.min(targetUp, i); j >= 0; --j) { // 逆序
      dp[j] = (j === 0 ? 0 : dp[j - 1] * probs[i - 1]) + // 这个向上
          dp[j] * (1 - probs[i - 1]) // 这个向下
    }
  }

  return dp[targetUp]
};

module.exports = probabilityOfHeads