/**
 * 对角线坐标，注意中间元素不能重复
 */
var diagonalSum = function(mat) {
  const m = mat.length;
  let res = 0;
  for (let i = 0; i < m; ++i) {
    res += mat[i][i];
    if (i !== m - i - 1) {
      res += mat[i][m - i - 1];
    }
  }
  return res;
};