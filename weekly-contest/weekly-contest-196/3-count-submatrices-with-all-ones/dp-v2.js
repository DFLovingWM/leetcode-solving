/**
 * DP/预处理：类似地，往左探索
 */
var numSubmat = function(mat) {
  const [R, C] = [mat.length, mat[0].length];

  // col[c][r]：表示在第`c`列中，到第`r`行的连续1数量
  const col = Array.from({ length: C }, () => Array.from({ length: R }, () => 0));
  for (let c = 0; c < C; ++c) {
    let acc = 0;
    for (let r = 0; r < R; ++r) {
      if (mat[r][c] === 0) {
        acc = 0;
      } else {
        ++acc;
      }
      col[c][r] = acc;
    }
  }

  let res = 0;
  for (let r = 0; r < R; ++r) {
    for (let c = 0; c < C; ++c) {
      // 以`(r, c)`为右下角
      let height = Infinity;
      for (let c0 = c; c0 >= 0; --c0) {
        height = Math.min(height, col[c0][r]);
        res += height;
      }
    }
  }
  return res;
};

module.exports = numSubmat;
