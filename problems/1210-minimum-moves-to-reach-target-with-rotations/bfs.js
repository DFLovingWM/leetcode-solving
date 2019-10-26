/**
 * BFS，记得去重
 * 
 * 时间：164ms
 */
const EMPTY = 0

let n, grid

var minimumMoves = function (g) {
  grid = g
  n = grid.length

  const start = new Position([0, 1], [0, 0], 0)

  const queue = new Queue()
  queue.push(start)

  const visit = new Set()
  visit.add(start.hashKey())

  while (!queue.empty()) {
    const curr = queue.pop()

    if (reachEnd(curr, n)) {
      return curr.step
    }

    let next, tmp

    // 往右走
    next = curr.getRight()
    if (canWalk(next) && !visit.has(next.hashKey())) {
      visit.add(next.hashKey())
      queue.push(next)
    }

    // 往下走
    next = curr.getDown()
    if (canWalk(next) && !visit.has(next.hashKey())) {
      visit.add(next.hashKey())
      queue.push(next)
    }

    // 顺时针90
    if (curr.isHorizontal()) {
      tmp = curr.getDown()
      next = curr.getClosewise()
      if (canWalk(tmp) && !visit.has(next.hashKey())) {
        visit.add(next.hashKey())
        queue.push(next)
      }
    }

    // 逆时针90
    if (!curr.isHorizontal()) {
      tmp = curr.getRight()
      next = curr.getCounterClockwise()
      if (canWalk(tmp) && !visit.has(next.hashKey())) {
        visit.add(next.hashKey())
        queue.push(next)
      }
    }
  }

  return -1
};

function reachEnd(position) {
  const { head, tail } = position
  return head[0] === n - 1 && head[1] === n - 1 &&
    tail[0] === n - 1 && tail[1] === n - 2
}

function isValid(position) {
  const { head, tail } = position
  return head[0] >= 0 && head[0] < n && head[1] >= 0 && head[1] < n &&
    tail[0] >= 0 && tail[0] < n && tail[1] >= 0 && tail[1] < n
}

function canWalk(position) {
  if (!isValid(position)) return false

  const { head, tail } = position
  return grid[head[0]][head[1]] === EMPTY && grid[tail[0]][tail[1]] === EMPTY
}

// ================================================================================

// 队列结点
function Position(head, tail, step) {
  this.head = head // 头坐标
  this.tail = tail // 尾坐标
  this.step = step // 当前共走了几步
}

Position.prototype.getRight = function () {
  const [hx, hy] = this.head
  const [tx, ty] = this.tail
  return new Position([hx, hy + 1], [tx, ty + 1], this.step + 1)
}

Position.prototype.getDown = function () {
  const [hx, hy] = this.head
  const [tx, ty] = this.tail
  return new Position([hx + 1, hy], [tx + 1, ty], this.step + 1)
}

Position.prototype.getClosewise = function () {
  const [hx, hy] = this.head
  const [tx, ty] = this.tail
  return new Position([hx + 1, hy - 1], [tx, ty], this.step + 1)
}

Position.prototype.getCounterClockwise = function () {
  const [hx, hy] = this.head
  const [tx, ty] = this.tail
  return new Position([hx - 1, hy + 1], [tx, ty], this.step + 1)
}

Position.prototype.isHorizontal = function () {
  return this.head[0] === this.tail[0]
}

Position.prototype.hashKey = function () {
  const { head, tail } = this
  return `${head[0]},${head[1]},${tail[0]},${tail[1]}`
}

// 队列
class Queue {
  constructor() {
    this.arr = []
  }

  empty() {
    return this.arr.length === 0
  }

  push(x) {
    this.arr.push(x)
  }

  pop() {
    return this.arr.shift()
  }
}

[
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 1, 0, 0, 0, 0, 0, 1, 0, 1], [1, 0, 0, 1, 0, 0, 1, 0, 1, 0], [0, 0, 0, 1, 0, 1, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0, 0, 0, 0]]
].forEach(g => {
  console.log(minimumMoves(g))
})