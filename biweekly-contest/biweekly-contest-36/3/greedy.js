/**
 * 贪心，每次放min即可
 */
var restoreMatrix = function(rowSum, colSum) {
  const m = rowSum.length;
  const n = colSum.length;
  const res = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      const v = Math.min(rowSum[i], colSum[j]);
      res[i][j] = v;
      rowSum[i] -= v;
      colSum[j] -= v;
    }
  }
  return res;
};
