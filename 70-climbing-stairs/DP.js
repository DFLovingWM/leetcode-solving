/**
 * 经典的DP问题。
 * 其实也是简单版的完全背包问题。
 * 
 * 时间：O(2N)=O(N), 64ms
 * 空间：O(N), 33.8MB
 */
var climbStairs = function(n) {
  const costs = [1, 2]
  const f = Array.from({ length: n + 1 }, () => 0)
  f[0] = 1
  for (let i = 1; i <= n; ++i) {
    for (const cost of costs) {
      if (i - cost >= 0) {
        f[i] += f[i - cost]
      }
    }
  }
  return f[n]
};

[2, 3].forEach(n => {
  console.log(climbStairs(n))
})