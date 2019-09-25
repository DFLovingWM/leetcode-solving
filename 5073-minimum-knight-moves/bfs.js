// 8个方向
const DIRS = [
  [2, 1],
  [-2, 1],
  [2, -1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2]
]

// 队列结点数据结构
function Node (x, y, step) {
  this.x = x
  this.y = y
  this.step = step
}

/**
 * BFS
 * 时间：O(@todo 日字型路径怎么分析啊), 1308ms
 */
var minKnightMoves = function(x, y) {
  // 将终点(x, y)转换到第一象限
  x = Math.abs(x)
  y = Math.abs(y)

  const [sx, sy] = [0, 0] // 起始点
  const queue = new Queue([new Node(sx, sy, 0)]) // 队列
  const visit = new Set([getKey(sx, sy)]) // 标记结点是否遍历过

  while (!queue.empty()) {
    const node = queue.popFront()

    if (node.x === x && node.y === y) return node.step // 走到终点了

    for (const [xx, yy] of DIRS) {
      const nextX = node.x + xx
      const nextY = node.y + yy
      if (!isValid(nextX, nextY)) continue // 超出第一象限，就不考虑

      const key = getKey(nextX, nextY)
      if (visit.has(key)) continue // 遍历过的也不考虑

      visit.add(key)
      queue.push(new Node(nextX, nextY, node.step + 1))
    }
  }
};

// 将【二维坐标】哈希到【一维】的唯一字符串
function getKey (x, y) {
  return `${x},${y}`
}

// 判断坐标是否合法（在这里，坐标都是非负数）
function isValid (x, y) {
  return x >= 0 && y >= 0
}

class Queue {
  constructor (arr = []) {
    this.arr = arr
  }

  empty () {
    return this.arr.length === 0
  }

  push (x) {
    this.arr.push(x)
  }

  popFront () {
    return this.arr.shift()
  }
}

[
  [2, 1],
  [5, 5],
].forEach(input => {
  console.log(minKnightMoves(...input))
})