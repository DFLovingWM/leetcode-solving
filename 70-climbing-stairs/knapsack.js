/**
 * 完全背包问题：重量为1、2的两种物品，可以拿任意数量
 * 
 * 时间：O(N)
 * 空间：O(N)
 */
var climbStairs = function(n) {
  const costs = [1, 2] // 两种物品
  const f = Array.from({ length: n + 1 }, () => 0) // 背包容量为n能获得的价值
  f[0] = 1

  for (let i = 1; i <= n; ++i) {
    for (const cost of costs) {
      if (i - cost >= 0) { // (下标为非负数)
        f[i] += f[i - cost]
      }
    }
  }

  return f[n]
};

module.exports = climbStairs