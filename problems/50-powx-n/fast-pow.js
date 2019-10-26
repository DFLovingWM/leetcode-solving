/**
 * 快速幂(二分)
 * 
 * 时间：O(logN), 64ms
 */
var myPow = function (x, n) {
  // 处理负数
  if (n < 0) {
    n *= -1
    x = 1 / x
  }

  let res = 1

  for (let i = n; i; i = Math.floor(i / 2)) {
    if (i % 2 === 1) {
      res *= x
    }
    x *= x
  }

  return res
};

[
  [2.00000, -2],
  [10, 0],
  [10, 1],
  [2.00000, 10],
  [2.10000, 3],
  [2, 10000000000000]
].forEach(input => {
  console.log(myPow(...input))
})