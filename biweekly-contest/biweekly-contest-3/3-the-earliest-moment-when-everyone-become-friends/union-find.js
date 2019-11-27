/**
 * 并查集
 * 
 * 时间：最优为`O(N)`, 84ms
 */
var earliestAcq = function (logs, N) {
  logs.sort((a, b) => a[0] - b[0]) // 按照时间戳排序

  const uf = new UnionFind(N)
  let count = 0 // 当前已合并的数量

  for (const [ts, a, b] of logs) {
    count += Number(uf.union(a, b))
    if (count === N - 1) {
      return ts
    }
  }

  return -1
};

class UnionFind {
  constructor (length) {
    this.father = Array.from({ length }, (_, i) => i)
  }

  getRoot (x) {
    if (this.father[x] === x) return x
    return this.father[x] = this.getRoot(this.father[x])
  }

  union (x, y) {
    const xx = this.getRoot(x)
    const yy = this.getRoot(y)
    if (xx !== yy) {
      this.father[xx] = yy
      return true
    } else {
      return false
    }
  }
}

[
  [[[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]], 6],
].forEach(input => {
  console.log(earliestAcq(...input))
})