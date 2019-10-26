/**
 * 并查集：先排序，依次合并结点并检测是否只剩下一个连通分量
 */
var earliestAcq = function(logs, N) {
  const uf = new UnionFind(N)
  logs = logs.slice().sort((a, b) => { // 时间戳升序
    return a[0] - b[0]
  })
  for (let [timestamp, a, b] of logs) {
    uf.union(a, b)
    if (uf.getBlockCount() === 1) return timestamp
  }
  return -1
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
      this.father[yy] = xx // 以左边为父亲
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

// [
//   [[
//     [20190101,0,1],
//     [20190104,3,4],
//     [20190107,2,3],
//     [20190211,1,5],
//     [20190224,2,4],
//     [20190301,0,3],
//     [20190312,1,2],
//     [20190322,4,5]
//   ], 6]
// ].forEach(input => {
//   console.log(earliestAcq(...input))
// })
