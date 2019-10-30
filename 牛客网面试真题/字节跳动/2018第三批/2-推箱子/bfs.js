/**
 * BFS解法：状态有四维
 * 参考：https://www.nowcoder.com/test/question/done?tid=28978295&qid=141003#summary
 */
const readline = require('readline');
const fs = require('fs');
const r = readline.createInterface({
  // input: fs.createReadStream('./in.txt'),
  // output: fs.createReadStream('./out.txt'),
  input: process.stdin,
  output: process.stdout,
})

let lineNum = -1

let R, C
let grid

r.on('line', (line) => {
  ++lineNum
  if (lineNum === 0) {
    [R, C] = line.split(' ').map(Number)
    grid = new Array(R).fill([])
  } else {
    grid[lineNum - 1] = line.split('')
    if (lineNum === R) {
      console.log(minStep())
    }
  }
})

const DIRS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
]

// 搜索最小步数
function minStep () {
  let [x, y, bx, by] = [0, 0, 0, 0]
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      switch (grid[i][j]) {
        case 'S': // 人的初始位置
          [x, y] = [i, j];
          break
        case '0': // 箱子的初始位置
          [bx, by] = [i, j];
          break
        default:
          break
      }
    }
  }

  let queue = []
  const visit = Array.from({ length: R }, () => Array.from({ length: C }, () => Array.from({ length: R }, () => Array.from({ length: C }, () => false))))
  queue.push(new Node(x, y, bx, by))
  visit[x][y][bx][by] = true

  // 层次遍历
  for (let level = 0; queue.length > 0; ++level) {
    const nextQueue = []

    for (const curr of queue) { // 当前的位置
      [x, y, bx, by] = [curr.x, curr.y, curr.bx, curr.by]

      for (const dir of DIRS) { // 遍历4个方向
        const [nx, ny] = [x + dir[0], y + dir[1]]
        const [nbx, nby] = [bx + dir[0], by + dir[1]]
        if (!isValid(nx, ny)) continue

        if ((nx === bx && ny === by) && isValid(nbx, nby) && !visit[nx][ny][nbx][nby]) { // 1. 如果是推箱子走
          if (grid[nbx][nby] === 'E') { // 如果到达终点
            return level + 1
          }
          visit[nx][ny][nbx][nby] = true
          nextQueue.push(new Node(nx, ny, nbx, nby))
        } else if ((nx !== bx || ny !== by) && !visit[nx][ny][bx][by]) { // 2. 如果是单纯走路
          visit[nx][ny][bx][by] = true
          nextQueue.push(new Node(nx, ny, bx, by))
        }
      }
    }

    queue = nextQueue
  }

  return -1
}

function Node (x, y, bx, by) {
  // 人的坐标
  this.x = x
  this.y = y
  // 箱子的坐标
  this.bx = bx
  this.by = by
}

function isValid (x, y) {
  return x >= 0 && x < R && y >= 0 && y < C && grid[x][y] !== '#'
}
