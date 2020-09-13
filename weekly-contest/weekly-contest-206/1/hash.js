/**
 * 哈希
 */
var numSpecial = function(mat) {
  const [m, n] = [mat.length, mat[0].length];
  const rowSum = Array.from({ length: m }, () => 0);
  const colSum = Array.from({ length: n }, () => 0);
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      rowSum[i] += mat[i][j];
      colSum[j] += mat[i][j];
    }
  }

  let res = 0;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (mat[i][j] === 1 && rowSum[i] === 1 && colSum[j] === 1) {
        ++res;
      }
    }
  }
  return res;
};
