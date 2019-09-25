/**
 * 循环模拟除法
 * 时间：5100ms
 */
const MAX = Math.pow(2, 31) - 1
const MIN = -Math.pow(2, 31)

var divide = function(dividend, divisor) {
  let isNegative = ((dividend > 0) ^ (divisor > 0)) === 1 ? true : false
  let res = 0 // 倍数
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  if (divisor === 1) {
    res = dividend
  } else {
    while (dividend >= divisor) {
      dividend -= divisor
      ++res
    }
  }

  res = isNegative ? -res : res
  return Math.min(MAX, res)
};

[
  [10, 3],
  [9, 3],
  [7, -3],
  [-3, -3],
  [-2147483648, -1],
].forEach(input => {
  console.log(divide(...input))
})