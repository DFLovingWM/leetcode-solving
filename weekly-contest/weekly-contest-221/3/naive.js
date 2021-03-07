/**
 * 模拟（循环）
 */
var findBall = function(grid) {
  const [m, n] = [grid.length, grid[0].length];

  function find(startCol) {
    let c = startCol;
    for (let r = 0; r < m; ++r) {
      if (c - 1 >= 0 && grid[r][c - 1] === -1 && grid[r][c] === -1) { // 走左下
        --c;
      } else if (c + 1 < n && grid[r][c] === 1 && grid[r][c + 1] === 1) { // 走右下
        ++c;
      } else {
        return -1;
      }
    }
    return c;
  }

  const res = Array.from({ length: n }, () => -1);
  for (let j = 0; j < n; ++j) {
    res[j] = find(j);
  }
  return res;
};

module.exports = findBall;
