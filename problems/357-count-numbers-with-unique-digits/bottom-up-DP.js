/**
 * 数学计算（类似Bottom-up DP推导）
 * 
 * 时间：O(N), 64ms
 */
var countNumbersWithUniqueDigits = function (N) {
  if (N > 10) N = 10 // N最多等于10

  const f = [1, 9] // f[i]表示i位不同数字的数量
  const prefix = [1, 10]
  for (let i = 2; i <= N; ++i) {
    f[i] = f[i - 1] * (11 - i)
    prefix[i] = prefix[i - 1] + f[i]
  }

  return prefix[N]
};

[
  0,
  1,
  2,
  10,
  11
].forEach(n => {
  console.log(countNumbersWithUniqueDigits(n))
})
