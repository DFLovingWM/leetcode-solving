/**
 * 二维前缀和(容斥原理)
 * 
 * 时间：O(N^4), 1032ms
 */
var numSubmat = function(mat) {
  const [m, n] = [mat.length, mat[0].length];
  const prefix = Array.from({ length: m + 1 }, () => (
    Array.from({ length: n + 1 }, () => 0)
  ));
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      prefix[i][j] = prefix[i-1][j] + prefix[i][j-1] + mat[i-1][j-1] - prefix[i-1][j-1];
    }
  }

  let res = 0;
  // 左上角
  for (let i = 0; i <= m; ++i) {
    for (let j = 0; j <= n; ++j) {
      // 右下角
      for (let u = i; u <= m; ++u) {
        for (let v = j; v <= n; ++v) {
          const real = prefix[u][v] - prefix[i][v] - prefix[u][j] + prefix[i][j];
          const expected = (u - i) * (v - j);
          if (real > 0 && real === expected) {
            res += 1;
          }
        }
      }
    }
  }
  return res;
};

module.exports = numSubmat;