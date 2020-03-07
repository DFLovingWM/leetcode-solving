/**
 * 快速幂
 * 
 * 时间：O(logN), 72ms
 */
var myPow = function (x, n) {
  if (n === 0) return 1;

  if (n < 0) {
    n = -n;
    x = 1 / x;
  }

  let res = 1;
  while (n !== 1) {
    if (n & 1) res *= x; // exp无法整除2时，匀出一个base
    n >>>= 1; // 指数减半
    x = x * x; // 底数翻倍
  }
  return res * x;
};