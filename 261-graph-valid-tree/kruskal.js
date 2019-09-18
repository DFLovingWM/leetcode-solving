/**
 * 最小生成树：Kruskal法
 */
var validTree = function(n, edges) {
  if (edges.length !== n - 1) return false // 边的数量不够(N-1)，直接失败

  const uf = new UnionFind(n)
  for (let [a, b] of edges) {
    if (!uf.union(a, b)) return false
  }
  return true
};

class UnionFind {
  constructor (length) {
    this.father = Array.from({ length }, (_, index) => index)
  }

  getRoot (x) {
    if (this.father[x] === x) return x
    return this.father[x] = this.getRoot(this.father[x])
  }

  union (x, y) {
    const [xx, yy] = [this.getRoot(x), this.getRoot(y)]
    if (xx !== yy) {
      this.father[yy] = xx
      return true
    } else {
      return false
    }
  }
}

[
  [5, [[0,1], [0,2], [0,3], [1,4]]],
  [5, [[0,1], [1,2], [2,3], [1,3], [1,4]]],
].forEach(input => {
  console.log(validTree(...input))
})