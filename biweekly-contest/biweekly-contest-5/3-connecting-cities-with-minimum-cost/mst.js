/**
 * 最小生成树
 */
var minimumCost = function (N, connections) {
  if (connections.length < N - 1) return -1

  const uf = new UnionFind(N + 1)
  let cnt = 0
  let res = 0
  for (const [a, b, weight] of connections.sort((A, B) => A[2] - B[2])) {
    if (!uf.find(a, b)) {
      uf.union(a, b)
      res += weight
      ++cnt
      if (cnt === N - 1) break
    }
  }
  return res
};

// 并查集
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
    return this.getRoot(x) === this.getRoot(y)
  }
}

[
  [3, [[1,2,5],[1,3,6],[2,3,1]]],
  [4, [[1,2,3],[3,4,4]]],
].forEach(input => {
  console.log(minimumCost(...input))
})