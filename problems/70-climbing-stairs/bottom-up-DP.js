/**
 * Bottom-up DP
 * 
 * 时间：O(N)
 * 空间：O(1)
 */
var climbStairs = function (n) {
  let [a, b] = [1, 1] // 不必开数组

  for (let i = 2; i <= n; ++i) {
    const c = a + b
    a = b
    b = c
  }

  return b
};

module.exports = climbStairs