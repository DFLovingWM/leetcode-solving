/**
 * Bottom-up DP：
 * `dp[i][j]`表示前i个硬币中j个向上的概率
 * 
 * 时间：O(N^2), 116ms
 * 空间：O(N^2)
 */
var probabilityOfHeads = function (probs, targetUp) {
  const n = probs.length
  const dp = new Array(n + 1).fill(0).map(() => new Array(targetUp + 1).fill(0))

  dp[0][0] = 1

  for (let i = 1; i <= n; ++i) {
    for (let j = 0; j <= targetUp; ++j) {
      dp[i][j] = (j === 0 ? 0 : dp[i - 1][j - 1] * probs[i - 1]) + // 这个向上
          dp[i - 1][j] * (1 - probs[i - 1]) // 这个向下
    }
  }

  return dp[n][targetUp]
};

module.exports = probabilityOfHeads