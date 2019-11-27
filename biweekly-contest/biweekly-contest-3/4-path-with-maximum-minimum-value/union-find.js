/**
 * 排序 + 着色 + 并查集
 * 
 * 时间：`O(NM * log(MN))`, 460ms
 */

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
]

var maximumMinimumPath = function (grid) {
  const [R, C] = [grid.length, grid[0].length]
  const arr = []
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      arr.push([grid[i][j], i, j])
    }
  }
  arr.sort((a, b) => a[0] - b[0]) // 值升序（从后面取起）

  function isValid (x, y) {
    return x >= 0 && x < R && y >= 0 && y < C
  }

  // 同时用于两个地方：
  // （1）并查集哈希key；（2）Set标记的哈希key
  function getKey (row, col) {
    return row * C + col
  }
  
  // 使用并查集来表示两个cell是否连通（在同一条路径上）
  const uf = new UnionFind(R * C)
  const joint = new Set()
  const [start, end] = [getKey(0, 0), getKey(R - 1, C - 1)]
  let res = Infinity

  // 检测起点和终点是否连通
  while (!uf.find(start, end)) {
    const [value, x, y] = arr.pop()
    const curr = getKey(x, y)

    // 遍历上下左右格子，如果有已经存在的，则与其建立连通
    for (const dir of DIRS) {
      const [px, py] = [x + dir[0], y + dir[1]]
      if (!isValid(px, py)) continue

      const prev = getKey(px, py)
      if (joint.has(prev)) {
        uf.union(prev, curr)
      }
    }
    // 增加自身存在
    joint.add(curr)
    // 更新答案
    res = Math.min(res, value)
  }

  return res
};

class UnionFind {
  constructor (length) {
    this.father = Array.from({ length }, (_, i) => i)
    this.rank = Array.from({ length }, () => 1)
  }

  getRoot (x) {
    if (this.father[x] === x) return x
    return this.father[x] = this.getRoot(this.father[x])
  }

  union (x, y) {
    let xx = this.getRoot(x)
    let yy = this.getRoot(y)
    if (xx === yy) return
    if (this.rank[xx] < this.rank[yy]) {
      [xx, yy] = [yy, xx]
    }
    this.father[yy] = xx
    this.rank[xx] += this.rank[yy]
  }

  find (x, y) {
    const xx = this.getRoot(x)
    const yy = this.getRoot(y)
    return xx === yy
  }
}

module.exports = maximumMinimumPath