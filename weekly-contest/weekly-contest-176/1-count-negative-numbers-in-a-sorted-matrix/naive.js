/**
 * 暴力
 */
var countNegatives = function(grid) {
  const R = grid.length;
  const C = grid[0].length;
  let res = 0;
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      if (grid[i][j] < 0) ++res;
    }
  }
  return res;
};