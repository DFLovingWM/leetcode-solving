/**
 * 前缀和/DP
 * 
 * 时间：`O(N^3)`, 76ms
 */
var largest1BorderedSquare = function (grid) {
  const [R, C] = [grid.length, grid[0].length]

  // 二维前缀和（表示1的个数）
  const horizontal = Array.from({ length: R }, () => Array.from({ length: C + 1 }, () => 0))
  const vertical = Array.from({ length: R + 1 }, () => Array.from({ length: C }, () => 0))

  for (let i = 0; i < R; ++i) {
    for (let j = 1; j <= C; ++j) {
      horizontal[i][j] = horizontal[i][j - 1] + grid[i][j - 1]
    }
  }
  for (let i = 1; i <= R; ++i) {
    for (let j = 0; j < C; ++j) {
      vertical[i][j] = vertical[i - 1][j] + grid[i - 1][j]
    }
  }

  let res = 0 // 记录最大边长

  // 遍历每一个坐标
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {

      // 从大到小，遍历每一个正方形边长
      for (let len = Math.min(R - i, C - j); len >= 1; --len) {
        if (
          horizontal[i][j + len] - horizontal[i][j] === len && // 首行全为1
          horizontal[i + len - 1][j + len] - horizontal[i + len - 1][j] === len && // 尾行全为1
          vertical[i + len][j] - vertical[i][j] === len && // 首列全为1
          vertical[i + len][j + len - 1] - vertical[i][j + len - 1] === len // 尾列全为1
        ) {
          res = Math.max(res, len)
          break // 提前退出
        }
      }
    }
  }

  return res * res // 返回面积
};

[
  [[1,1,1],[1,0,1],[1,1,1]],
  [[1,1,0,0]],
].forEach(grid => {
  console.log(largest1BorderedSquare(grid))
})