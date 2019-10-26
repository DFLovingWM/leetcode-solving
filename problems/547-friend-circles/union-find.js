/**
 * 求连通块个数
 */
var findCircleNum = function(matrix) {
  const n = matrix.length
  const uf = new UnionFind(n)
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (matrix[i][j] === 1) {
        uf.union(i, j)
      }
    }
  }
  return uf.getBlockCount()
};

// 并查集
class UnionFind {
  constructor (length) {
    this.father = Array.from({ length }, (_, index) => index) // 求当前结点的父亲结点
  }

  getRoot (x) {
    if (x === this.father[x]) return x
    return this.father[x] = this.getRoot(this.father[x])
  }

  union (x, y) {
    const xx = this.getRoot(x)
    const yy = this.getRoot(y)
    if (xx !== yy) {
      this.father[yy] = xx
    }
  }

  // 获取连通分量数
  getBlockCount () {
    const set = new Set()
    for (let i = 0; i < this.father.length; ++i) {
      set.add(this.getRoot(i))
    }
    return set.size
  }
}

[
  [[1,1,0],
  [1,1,0],
  [0,0,1]],
  [[1,1,0],
  [1,1,1],
  [0,1,1]]
].forEach(m => {
  console.log(findCircleNum(m))
})