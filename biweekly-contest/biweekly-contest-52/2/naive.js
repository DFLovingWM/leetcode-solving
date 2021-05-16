/**
 * 直接模拟/暴力
 * 根据等差公式可以推导出，时间最多为 O(2^15) 左右，所以不超时
 */
var memLeak = function(a, b) {
  let i = 1;
  for (; a >= i || b >= i; ++i) {
    if (a >= b) {
      a -= i;
    } else {
      b -= i;
    }
  }
  return [i, a, b];
};