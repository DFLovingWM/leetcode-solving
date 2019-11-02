/**
 * 并查集
 */
var smallestStringWithSwaps = function(S, pairs) {
  const n = S.length
  const uf = new UnionFind(n)
  for (const [i, j] of pairs) {
    uf.union(i, j)
  }
  
  const root2Block = new Map()
  const index2Block = new Map()
  
  for (let i = 0; i < n; ++i) {
    let r = uf.getRoot(i)
    if (!root2Block.has(r)) root2Block.set(r, [])
    const block = root2Block.get(r)
    block.push(i)
    index2Block.set(i, block)
  }
  // 联通块内，进行字典排序
  for (const arr of root2Block.values()) {
    arr.sort((i, j) => {
      if (S[i] < S[j]) return 1
      if (S[i] > S[j]) return -1
      return 0
    })
  }

  let res = ''
  for (let i = 0; i < n; ++i) {
    const block = index2Block.get(i)
    const min = block.pop()
    res += S[min]
  }
  return res
};

class UnionFind {
  constructor (n) {
    this.father = Array.from({ length: n }, (_, i) => i)
  }
  
  getRoot (x) {
    if (this.father[x] === x) return x
    return this.father[x] = this.getRoot(this.father[x])
  }
  
  union (x, y) {
    const xx = this.getRoot(x)
    const yy = this.getRoot(y)
    this.father[xx] = yy
  }
}