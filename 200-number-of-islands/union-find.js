/**
 * 并查集解法
 */
const DIRS = [
  [0, 1],
  [1, 0]
]
const LAND = '1'

var numIslands = function(grid) {
  const R = grid.length
  if (R === 0) return 0
  const C = grid[0].length
  const uf = new UnionFind(R * C)

  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      if (grid[i][j] !== LAND) continue // 如果不是陆地就算了
      let cur = getIndex(grid, i, j)
      // 2个方向（右、下）的相邻结点就是连通的
      for (const dir of DIRS) {
        let nextI = i + dir[0]
        let nextJ = j + dir[1]
        if (isValid(R, C, nextI, nextJ) && grid[nextI][nextJ] === LAND) { // 相邻的合法、而且也是陆地，就合并
          let next = getIndex(grid, nextI, nextJ)
          uf.union(cur, next)
        }
      }
    }
  }
debugger
  const rootSet = new Set()
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      if (grid[i][j] === LAND) {
        rootSet.add(uf.getRoot(getIndex(grid, i, j)))
      }
    }
  }
  return rootSet.size
}

function getIndex (grid, i, j) {
  return i * grid[0].length + j
}

function isValid (r, c, i, j) {
  return i >= 0 && i < r && j >= 0 && j < c
}

class UnionFind {
  constructor (length) {
    debugger
    this.father = Array.from({ length }, (_, index) => index)
  }

  // 获取根
  getRoot (x) {
    if (x === this.father[x]) return x
    return this.father[x] = this.getRoot(this.father[x])
  }

  // 查询两个结点是否属于同一棵树
  find (x, y) {
    return this.getRoot(x) === this.getRoot(y)
  }

  // 合并两个结点
  union (x, y) {
    const xx = this.getRoot(x)
    const yy = this.getRoot(y)
    if (xx !== yy) {
      this.father[xx] = yy // 这里次序不重要
    }
  }
}

[
  [
    '11110'.split(''),
    '11010'.split(''),
    '11000'.split(''),
    '00000'.split(''),
  ],
  [
    '11000'.split(''),
    '11000'.split(''),
    '00100'.split(''),
    '00011'.split(''),
  ],
  [["1"],["0"],["1"],["0"],["1"],["1"]],
].forEach(m => {
  console.log(numIslands(m))
})