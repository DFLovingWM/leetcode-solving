/**
 * 分2种情况讨论
 */
function findRedundantDirectedConnection (edges) {
  const n = edges.length
  const inDegree = Array.from({ length: n + 1 }, () => 0)
  let invalidNode = -1
  for (const [from, to] of edges) {
    ++inDegree[to]
    if (inDegree[to] === 2) {
      invalidNode = to
    }
  }
  if (invalidNode !== -1) { // 情况1：存在入度为2的结点
    for (let i = edges.length - 1; i >= 0; --i) {
      if (edges[i][1] === invalidNode) {
        const res = findRedundantConnection(edges, i) // 尝试排除这条边，然后使用Kruskal算法看是否还有环存在
        if (!res.length) {
          // 无环，说明排除了这条边是对的
          return edges[i]
        }
      }
    }
  } else { // 情况2：所有结点的入度都是1
    // 有环，直接使用Kruskal算法找出来
    return findRedundantConnection(edges, -1)
  }
};

function findRedundantConnection (edges, skip) {
  const n = edges.length
  const unionFind = new UnionFind(n + 1)
  for (let i = 0; i < edges.length; ++i) {
    if (i === skip) continue
    if (!unionFind.union(edges[i][0], edges[i][1])) { // 有环存在
      return edges[i]
    }
  }
  return [] // 无环
}

// 数据结构：并查集
class UnionFind {
  constructor (length) {
    this.father = Array.from({ length }, (_, index) => index)
  }

  // 获取根
  getRoot (x) {
    if (x === this.father[x]) return x
    return this.father[x] = this.getRoot(this.father[x])
  }

  // 合并两个结点
  union (x, y) {
    const xx = this.getRoot(x)
    const yy = this.getRoot(y)
    if (xx === yy) {
      return false
    } else {
      this.father[xx] = yy
      return true
    }
  }
}

[
  [[1,2], [1,3], [2,3]],
  [[1,2], [2,3], [3,4], [4,1], [1,5]],
  [[2,1],[3,1],[4,2],[1,4]],
].forEach(edges => {
  console.log(findRedundantDirectedConnection(edges))
})
