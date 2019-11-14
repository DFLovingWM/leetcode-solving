/**
 * 看作完全背包问题：两种物品：A代价为1、B代价为2
 * 
 * 时间：O(N)
 * 空间：O(N)
 */
var climbStairs = function (n) {
  const dp = Array.from({ length: n + 1 }, () => 0) // 总阶梯为n的方案数
  const costs = [1, 2] // 两种物品

  dp[0] = 1

  for (let curr = 0; curr <= n; ++curr) {
    for (const cost of costs) {
      if (curr - cost >= 0) {
        dp[curr] += dp[curr - cost]
      }
    }
  }

  return dp[n]
};

module.exports = climbStairs