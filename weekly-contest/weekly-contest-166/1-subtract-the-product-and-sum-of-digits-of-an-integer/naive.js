/**
 * 简单模拟即可
 */
var subtractProductAndSum = function (n) {
  let sum = 0, product = 1
  for (; n; n = Math.floor(n / 10)) {
    const tmp = n % 10
    sum += tmp
    product *= tmp
  }
  return product - sum
};