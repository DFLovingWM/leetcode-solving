/**
 * 最小生成树：Kruskal法
 */
var minimumCost = function(N, connections) {
  if (connections.length < N - 1) return -1 // 边的数量不够N-1，直接失败

  const uf = new UnionFind(N)
  let res = 0
  let count = 0
  connections = connections.slice().sort((a, b) => a[2] - b[2]) // 边长升序
  for (let [a, b, length] of connections) {
    --a
    --b
    if (!uf.find(a, b)) {
      uf.union(a, b)
      res += length
      ++count
      if (count === N - 1) break // 边选够了，可以结束了
    }
  }

  return res
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
    }
  }

  find (x, y) {
    return this.getRoot(x) === this.getRoot(y)
  }
}

[
  [3, [[1,2,5],[1,3,6],[2,3,1]]],
  [4, [[1,2,3],[3,4,4]]],
].forEach(input => {
  console.log(minimumCost(...input))
})