/**
 * Bottom-up DP
 * 
 * 时间：O(N)
 * 空间：O(1)
 */
var fib = function (n) {
  let [a, b] = [1, 0] // 初始状态：a=f(-1), b=f(0)

  for (let i = 1; i <= n; ++i) { // 迭代：从f(1)开始推
    const c = a + b
    a = b
    b = c
  }

  return b
};

module.exports = fib