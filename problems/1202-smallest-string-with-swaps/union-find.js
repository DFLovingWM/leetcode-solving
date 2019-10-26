/**
 * 并查集
 * 时间：O(NlogN), 204ms
 * 空间：O(N), 72.9MB
 */
var smallestStringWithSwaps = function(s, pairs) {
  const n = s.length
  const uf = new UnionFind(n)
  for (const [a, b] of pairs) { // 将能互换的下标“合并”
    uf.union(a, b)
  }

  const blocks = uf.getBlocks()
  for (const block of blocks) { // 每个连通分量中，字母降序排序
    block.sort((a, b) => {
      return s[a] < s[b] ? 1 : s[a] > s[b] ? -1 : 0
    })
  }
  const index2Block = new Map() // 建立映射：下标 => 连通分量
  for (const block of blocks) {
    for (const i of block) {
      index2Block.set(i, block)
    }
  }

  let res = ''
  for (let i = 0; i < n; ++i) { // 根据下标，依次取最后一个字符，构成最小字符串
    const block = index2Block.get(i)
    res += s[block.pop()]
    if (!block.length) {
      index2Block.delete(i)
    }
  }
  return res
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
  
  // 获取所有连通分量
  getBlocks () {
    const blockMap = new Map()
    for (let i = 0; i < this.father.length; ++i) {
      const root = this.getRoot(i)
      if (!blockMap.has(root)) {
        blockMap.set(root, [])
      }
      blockMap.get(root).push(i)
    }
    return Array.from(blockMap.values())
  }
}

[
  ['dcab', [[0,3],[1,2]]],
  ['dcab', [[0,3],[1,2],[0,2]]],
  ['cba', [[0,1],[1,2]]],
].forEach(input => {
  console.log(smallestStringWithSwaps(...input))
})
