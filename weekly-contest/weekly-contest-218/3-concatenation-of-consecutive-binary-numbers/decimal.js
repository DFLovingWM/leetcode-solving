/**
 * 十进制
 */
var concatenatedBinary = function(n) {
  const mod = 1e9 + 7;
  let res = 0;
  for (let i = 1; i <= n; ++i) {
    res = res * a + i;
    res %= mod;
  }
  return res;
};