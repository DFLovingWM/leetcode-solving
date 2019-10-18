/**
 * Naive
 * 
 * 时间：O(N)
 */
var myPow = function (x, n) {
  if (n === 0) return 1
  if (n < 0) {
    x = 1 / x
    n = -n
  }

  let res = 1
  for (let i = 0; i < n; ++i) {
    res *= x
  }
  return res
};

[
  [2.00000, 10],
  [2.10000, 3],
  [2.00000, -2],
  [2, 1000000000]
].forEach(input => {
  console.log(myPow(...input))
})