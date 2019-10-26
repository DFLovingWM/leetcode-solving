/**
 * 并查集求连通分量数
 */
var countComponents = function(n, edges) {
  const uf = new UnionFind(n)
  for (const [a, b] of edges) {
    uf.union(a, b)
  }
  return uf.getBlockCount()
};

class UnionFind {
  constructor (length) {
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
  [5, [[0, 1], [1, 2], [3, 4]]],
  [5, [[0, 1], [1, 2], [2, 3], [3, 4]]],
].forEach(input => {
  console.log(countComponents(...input))
})