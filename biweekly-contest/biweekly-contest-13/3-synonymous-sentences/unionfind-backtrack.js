/**
 * 并查集 + 回溯
 */
var generateSentences = function (synonyms, text) {
  const uf = new UnionFind()
  for (const [a, b] of synonyms) {
    uf.union(a, b)
  }
  const root2Blocks = uf.getBlocks()
  for (const block of root2Blocks.values()) {
    block.sort() // 每个连通分量内的单词按字典序排序
  }

  const res = []
  const tokens = text.split(' ')

  function backtrack (i, acc) {
    if (i === tokens.length) {
      res.push(acc)
      return
    }
  
    const token = tokens[i]
    const rootWord = uf.getRoot(token)
    if (rootWord) { // 如果有同义词
      for (const word of root2Blocks.get(rootWord)) {
        backtrack(i + 1, acc + (i === 0 ? '' : ' ') + word)
      }
    } else {
      backtrack(i + 1, acc + (i === 0 ? '' : ' ') + token)
    }
  }

  backtrack(0, '')
  return res
};

// 并查集
class UnionFind {
  constructor () {
    this.father = new Map()
  }

  getRoot (x) {
    if (this.father.get(x) === x) return x
    const res = this.getRoot(this.father.get(x))
    this.father.set(x, res)
    return res
  }

  union (x, y) {
    if (!this.father.has(x)) this.father.set(x, x)
    if (!this.father.has(y)) this.father.set(y, y)

    const xx = this.getRoot(x)
    const yy = this.getRoot(y)
    if (xx !== yy) {
      this.father.set(xx, yy)
    }
  }

  getBlocks () {
    const res = new Map() // 根 => 连通分量
    for (const curr of this.father.keys()) {
      const father = this.getRoot(curr)
      if (!res.has(father)) {
        res.set(father, [])
      }
      res.get(father).push(curr)
    }
    return res
  }
}

module.exports = generateSentences