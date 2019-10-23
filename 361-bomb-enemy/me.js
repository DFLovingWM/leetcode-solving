/**
 * 枚举每个空位
 */
var maxKilledEnemies = function (grid) {
  let res = 0
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (grid[i][j] === '0') {
        res = Math.max(res, calc(grid, i, j))
      }
    }
  }
  return res
};

function calc (grid, x, y) {
  
}