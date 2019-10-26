/**
 * 分3种情况讨论
 */
function findRedundantDirectedConnection (edges) {
  const n = edges.length

  const edgeTo = Array.from({ length: n + 1 }, () => -1) // 获取以该结点为后继的边
  const unionFind = new UnionFind()
  let [one, two, any] = [-1, -1, -1]

  for (let i = 0; i < edges.length; ++i) {
    const [from, to] = edges[i]

    if (edgeTo[to] !== -1) { // 入度为2
      one = edgeTo[to]
      continue
    }
    edgeTo[to] = i

  }
}

class UnionFind {
  constructor (length) {
    this.father = Array.from({ length }, (_, i) => i)
  }

  getRoot (x) {
    if (this.father[x] === x) return x
    return this.father[x] = this.getRoot(this.father[x])
  }
}

[
  [[1,2], [1,3], [2,3]],
  [[1,2], [2,3], [3,4], [4,1], [1,5]],
  [[2,1],[3,1],[4,2],[1,4]],
].forEach(edges => {
  console.log(findRedundantDirectedConnection(edges))
})
