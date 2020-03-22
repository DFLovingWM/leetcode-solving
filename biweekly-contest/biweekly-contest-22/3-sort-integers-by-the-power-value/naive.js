/**
 * 暴力
 * 
 * 时间：188ms
 */
var getKth = function(lo, hi, k) {
  const weights = [];
  for (let i = lo; i <= hi; ++i) {
    weights.push([i, getWeight(i)]);
  }
  weights.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
  });
  return weights[k - 1][0];
};

function getWeight(n) {
  let res = 0;
  for (; n !== 1; ++res) {
    if (n & 1) {
      n = 3 * n + 1;
    } else {
      n /= 2;
    }
  }
  return res;
}