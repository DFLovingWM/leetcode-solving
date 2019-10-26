let _grid
let _visited // 防止重复添加到队列中
const FRESH = 1
const ROTTEN = 2

/**
 * 思路：BFS
 */
function orangesRotting (grid) {
  _grid = grid
  _visited = Array.from({ length: grid.length }, () => {
    return Array.from({ length: grid[0].length }, () => {
      return false
    })
  })

  let queue = []
  let time = 0
  
  // 初始化
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (grid[i][j] === ROTTEN) {
        _visited[i][j] = true
        queue.push(new Cell(i, j, 0))
      }
    }
  }

  // 开始BFS
  while (queue.length > 0) {
    let cell = queue.shift()
    time = cell.time // 更新时间

    let { x, y } = cell
    // debugger
    grid[x][y] = ROTTEN

    let nextCells = cell.getSurroundingFreshCells()
    queue.push(...nextCells)
  }

  // 看最后是否还有fresh的
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (grid[i][j] === FRESH) {
        return -1
      }
    }
  }

  return time
}

class Cell {
  constructor (x, y, time) {
    this.x = x
    this.y = y
    this.time = time
  }
  
  getSurroundingFreshCells () {
    let cells = []
    let offsets = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1]
    ]
    
    for (const [xOffset, yOffset] of offsets) {
      let x = this.x + xOffset
      let y = this.y + yOffset
      if (
        (x >= 0 && x < _grid.length) && (y >= 0 && y < _grid[0].length) &&
        (_grid[x][y] === FRESH) &&
        !_visited[x][y]
      ) {
        cells.push(new Cell(x, y, this.time + 1))
        _visited[x][y] = true
      }
    }

    return cells
  }
}

// orangesRotting([[2,2],[1,1],[0,0],[2,0]])

/*
[[2,1,1],[1,1,0],[0,1,1]]
[[2,1,1],[0,1,1],[1,0,1]]
[[0,2]]
[[0]]
[[2,2],[1,1],[0,0],[2,0]]

orangesRotting([[2,2],[1,1],[0,0],[2,0]])
*/