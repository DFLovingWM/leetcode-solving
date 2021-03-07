/**
 * DP/预处理
 */
var numSubmat = function(mat) {
  const [R, C] = [mat.length, mat[0].length];

  // left[r][c]：表示在第`r`行中，到第`c`列的连续1数量
  const left = Array.from({ length: R }, () => Array.from({ length: C }, () => 0));
  for (let r = 0; r < R; ++r) {
    let acc = 0;
    for (let c = 0; c < C; ++c) {
      if (mat[r][c] === 0) {
        acc = 0;
      } else {
        ++acc;
      }
      left[r][c] = acc;
    }
  }

  let res = 0;
  for (let r = 0; r < R; ++r) {
    for (let c = 0; c < C; ++c) {
      // 以`(r, c)`为矩阵右下角，往上探索
      // 每次看高为`k`的矩阵，数量有`min(width)`个（分别是：1*k, 2*k, ...width*k）
      // 注意：因为要以更小的 width 为准，所以越往上，满足的矩阵的 width 递减
      let width = Infinity;
      for (let r0 = r; r0 >= 0; --r0) {
        width = Math.min(width, left[r0][c]);
        res += width;
      }
    }
  }
  return res;
};

module.exports = numSubmat;
