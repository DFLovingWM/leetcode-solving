/**
 * 并查集
 * 
 * 时间：最优`O(N^2)`, 224ms
 */
var countServers = function (grid) {
  const [R, C] = [grid.length, grid[0].length]
  const uf = new UnionFind(R * C)

  function getKey (i, j) {
    return i * C + j
  }

  // 处理每一行的连通性
  for (let i = 0; i < R; ++i) {
    const row = [] // 邻接表
    for (let j = 0; j < C; ++j) {
      if (grid[i][j] === 1) {
        row.push(getKey(i, j))
      }
    }
    for (let i = 1; i < row.length; ++i) {
      uf.union(row[i - 1], row[i])
    }
  }

  // 同理，处理列的连通性
  for (let j = 0; j < C; ++j) {
    const col = [] // 邻接表
    for (let i = 0; i < R; ++i) {
      if (grid[i][j] === 1) {
        col.push(getKey(i, j))
      }
    }
    for (let i = 1; i < col.length; ++i) {
      uf.union(col[i - 1], col[i])
    }
  }

  // 数森林数量
  let cnt = 0
  let forestNum = 0
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      if (grid[i][j] === 1) {
        ++cnt
        const key = getKey(i, j)
        if (uf.isForest(key)) ++forestNum
      }
    }
  }
  return cnt - forestNum
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

  isForest (x) {
    return this.father[x] === x && this.rank[x] === 1
  }
}

module.exports = countServers