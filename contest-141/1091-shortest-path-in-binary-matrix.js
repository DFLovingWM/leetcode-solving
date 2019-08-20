class Queue {
  constructor (arr = []) {
    this.arr = arr
  }

  empty () {
    return this.arr.length === 0
  }

  push (newElement) {
    this.arr.push(newElement)
  }

  pop () {
    return this.arr.shift()
  }

  front () {
    return this.arr[0]
  }

  back () {
    return this.arr[this.arr.length - 1]
  }
}

class Position {
  constructor (x, y, step) {
    this.x = x
    this.y = y
    this.step = step
  }
}

const DIRECTION_8 = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
]

/**
 * BFS
 */
var shortestPathBinaryMatrix = function(grid) {
  let length = grid.length

  if (grid[0][0] !== 0 || grid[length - 1][length - 1] !== 0) return -1 // Edge case

  let hasChecked = Array.from({ length }, () => {
    return Array.from({ length }, () => false)
  })
  const toCheck = new Queue()

  hasChecked[0][0] = true
  toCheck.push(new Position(0, 0, 1))

  while (!toCheck.empty()) {
    const { x, y, step } = toCheck.pop()

    if (x === length - 1 && y === length - 1) { // 到达终点
      return step
    }

    for (const [xOffset, yOffset] of DIRECTION_8) { // 扩展子结点
      const nextX = x + xOffset
      const nextY = y + yOffset
      if (
        nextX >= 0 && nextX < length && nextY >= 0 && nextY < length && // 合法位置
        grid[nextX][nextY] === 0 && // 能走
        !hasChecked[nextX][nextY] // 没走过
      ) {
        hasChecked[nextX][nextY] = true
        toCheck.push(new Position(nextX, nextY, step + 1))
      }
    }
  }

  return -1 // 终点不可达
};

[
  [[0,1],[1,0]],
  [[0,0,0],[1,1,0],[1,1,0]],
  [[0,0,0,0,1],[1,0,0,0,0],[0,1,0,1,0],[0,0,0,1,1],[0,0,0,1,0]]
].forEach(grid => {
  console.log(shortestPathBinaryMatrix(grid))
})
