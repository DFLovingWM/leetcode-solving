/**
 * 动态规划
 */
var tribonacci = function (n) {
  if (n === 0) return 0
  if (n === 1) return 1
  if (n === 2) return 1

  let [a, b, c] = [0, 1, 1]
  for (let i = 3; i <= n; ++i) {
    [a, b, c] = [b, c, a + b + c]
  }
  return c
};

[
  4,
  25,
].forEach(n => {
  console.log(tribonacci(n))
})