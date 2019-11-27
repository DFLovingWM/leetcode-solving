/**
 * 与二进制一样的求法
 */
var baseNeg2 = function (N) {
  let res = ''
  while (N) {
    const q = Math.ceil(N / -2)
    const r = N - (-2) * q
    res = String(r) + res
    N = q
  }
  return res || '0'
};

[
  2,
  3,
  4,
].forEach(n => {
  console.log(baseNeg2(n))
})