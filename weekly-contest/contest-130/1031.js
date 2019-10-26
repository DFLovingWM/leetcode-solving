const STATE = {
  YES: 1,
  NO: 2,
  UNKNOWN: 3
}
const DIRECTION_4 = [[0, 1], [0, -1], [1, 0], [-1, 0]]

var numEnclaves = function(grid) {
  let [row, col] = [grid.length, grid[0].length]
  let state = create2DArray(row, col, STATE.UNKNOWN)
  let count = 0

  for (let c = 0; c < col; ++c) {
    if (grid[0][c] === 1) expand(grid, state, 0, c)
    if (grid[row - 1][c] === 1) expand(grid, state, row - 1, c)
  }
  for (let r = 0; r < row; ++r) {
    if (grid[r][0] === 1) expand(grid, state, r, 0)
    if (grid[r][col - 1] === 1) expand(grid, state, r, col - 1)
  }

  // console.log(state)

  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < col; ++j) {
      if (grid[i][j] === 1 && state[i][j] !== STATE.YES) {
        ++count
      }
    }
  }

  return count
};

function expand (grid, state, x, y) {
  state[x][y] = STATE.YES
  for (const [ox, oy] of DIRECTION_4) {
    let [nextX, nextY] = [x + ox, y + oy]
    if (isValid(nextX, nextY, grid) && grid[nextX][nextY] === 1 && state[nextX][nextY] === STATE.UNKNOWN) {
      expand(grid, state, nextX, nextY)
    }
  }
}

function isValid (x, y, grid) {
  let [row, col] = [grid.length, grid[0].length]
  return x >= 0 && x < row && y >= 0 && y < col
}

function create2DArray (row, col, defaultVal) {
  return Array.from({ length: row }, () => {
    return Array.from({ length: col }, () => {
      return defaultVal
    })
  })
}

[
  [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]],
  [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
].forEach(grid => {
  console.log(numEnclaves(grid))
})