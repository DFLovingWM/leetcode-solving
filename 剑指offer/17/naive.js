/**
 * 暴力
 */
var printNumbers = function (n) {
  const limit = Math.pow(10, n);
  const res = [];
  for (let i = 1; i < limit; ++i) {
    res.push(i);
  }
  return res;
};