/**
 * 构造树，肯定用递归
 * 
 * 时间：124ms
 */
var construct = function (grid) {
  return dfs(grid, 0, 0, grid.length, grid[0].length)
};

function dfs (grid, x1, y1, x2, y2) {
  let ones = 0, zeros = 0

  for (let i = x1; i < x2; ++i) {
    for (let j = y1; j < y2; ++j) {
      if (grid[i][j] === 1) {
        ++ones
      } else {
        ++zeros
      }
    }
  }

  let res
  if (ones === 0) { // 全都是0
    res = new Node(false, true)
  } else if (zeros === 0) { // 全都是1
    res = new Node(true, true)
  } else { // 非叶子结点
    const xm = (x1 + x2) / 2
    const ym = (y1 + y2) / 2
    res = new Node('*', false, dfs(grid, x1, y1, xm, ym), dfs(grid, x1, ym, xm, y2), dfs(grid, xm, y1, x2, ym), dfs(grid, xm, ym, x2, y2))
  }
  return res
}