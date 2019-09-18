/**
 * 并查集（动态地新增结点），需要优化计算连通分量数目的过程
 * 时间：O(M * N + K)，耗时292ms
 */

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
]

const LAND = '1'
const SEA = '0'

var numIslands2 = function(row, col, positions) {
  const matrix = Array.from({ length: row }, () => Array.from({ length: col }, () => SEA))
  const uf = new UnionFind(row * col)
  const res = []

  for (const [i, j] of positions) {
    // 新增该结点
    let curIndex = getIndex(i, j, row, col)
    uf.insert(curIndex)
    matrix[i][j] = LAND

    // 遍历4个方向上，尝试合并
    for (const dir of DIRS) {
      const [nextI, nextJ] = [i + dir[0], j + dir[1]]
      if (isValid(nextI, nextJ, row, col) && matrix[nextI][nextJ] === LAND) { // 如果可以合并
        uf.union(curIndex, getIndex(nextI, nextJ, row, col))
      }
    }

    res.push(uf.getBlockCount())
  }

  return res
};

function getIndex (i, j, row, col) {
  return i * col + j
}

function isValid (i, j, row, col) {
  return i >= 0 && i < row && j >= 0 && j < col
}

class UnionFind {
  constructor (length) {
    this.father = Array.from({ length }, () => -1) // -1表示不存在该结点
    this.blockCount = 0 // 连通块数量
  }

  getRoot (x) {
    if (this.father[x] === -1) return -1
    if (this.father[x] === x) return x
    return this.father[x] = this.getRoot(this.father[x])
  }

  union (x, y) {
    const xx = this.getRoot(x)
    const yy = this.getRoot(y)
    if (xx !== yy) {
      this.father[xx] = yy
      --this.blockCount
    }
  }

  // 获取连通块数目
  getBlockCount () {
    return this.blockCount
  }

  // 新增结点（孤立连通块）
  insert (x) {
    if (this.father[x] === -1) {
      this.father[x] = x
      ++this.blockCount
    }
  }
}

[
  // [3, 3, [[0,0], [0,1], [1,2], [2,1]]],
  // [2, 2, [[0,0],[1,1],[0,1]]],
  [3, 3, [[0,0],[0,1],[1,2],[1,2]]],
].forEach(input => {
  console.log(numIslands2(...input))
})