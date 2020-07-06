/**
 * 连续1
 * 
 * 时间：O(N^3), 108ms
 */
var numSubmat = function(mat) {
  const [m, n] = [mat.length, mat[0].length];
  // left[i][j]表示第i行中，到第j列有多少个连续的1
  const left = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (mat[i][j] === 0) {
        left[i][j] = 0;
      } else {
        left[i][j] = (j === 0 ? 0 : left[i][j - 1]) + mat[i][j];
      }
    }
  }

  let res = 0;
  // 遍历右下角(i, j)
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      // 往上看每一行，但以当前min为标准
      let min = Infinity;
      for (let r = i; r >= 0; --r) {
        min = Math.min(min, left[r][j]); // 以更短的为准
        if (min === 0) break; // 可以提速一点
        res += min;
      }
    }
  }

  return res;
};

module.exports = numSubmat;