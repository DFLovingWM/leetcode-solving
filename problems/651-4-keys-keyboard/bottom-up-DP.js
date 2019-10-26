/**
 * 动态规划：`dp[i]`表示i次操作能得到的最多字符数，有两种选择
 * 
 * 时间：O(N^2), 64ms
 */
var maxA = function (n) {
  const dp = new Array(n + 1).fill(0)
  dp[1] = 1

  for (let i = 2; i <= n; ++i) {
    // 策略1：第i次操作是“输入”
    dp[i] = dp[i - 1] + 1 // 作为dp[i]初始值

    // 策略2：第i次操作是“粘贴”
    for (let j = 1; j < i; ++j) {
      // 已有的 + 粘贴(i-j-2)次的
      // 减去2是因为：要花2步进行进行“全选 + 复制”
      const tmp = dp[j] + dp[j] * (i - j - 2)
      dp[i] = Math.max(dp[i], tmp)
    }
  }

  return dp[n]
};

module.exports = maxA