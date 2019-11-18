/**
 * 并查集 + 回溯
 */
var generateSentences = function (synonyms, text) {
  // 单词与数字互相建立映射
  const word2Index = new Map()
  const index2Word = new Map()
  let index = 0
  for (const [a, b] of synonyms) {
    if (!word2Index.has(a)) {
      word2Index.set(a, index)
      index2Word.set(index, a)
      ++index
    }
    if (!word2Index.has(b)) {
      word2Index.set(b, index)
      index2Word.set(index, b)
      ++index
    }
  }

  const uf = new UnionFind(index)
  for (const [a, b] of synonyms) {
    uf.union(word2Index.get(a), word2Index.get(b))
  }

  // 建立映射：单词 => 连通块
  const word2Words = new Map()
  const blocks = uf.getBlocks()
  for (const block of blocks) {
    const words = block.map(i => index2Word.get(i)).sort() // 字典序升序
    for (const i of block) {
      const word = index2Word.get(i)
      word2Words.set(word, words)
    }
  }

  const words = text.split(' ')
  const res = []

  function backtrack (i, acc) {
    if (i === words.length) {
      res.push(acc.join(' '))
      return
    }
    const word = words[i]
    if (word2Words.has(word)) { // 如果有同义词
      for (const syn of word2Words.get(word)) {
        acc.push(syn)
        backtrack(i + 1, acc)
        acc.pop()
      }
    } else {
      acc.push(word)
      backtrack(i + 1, acc)
      acc.pop()
    }
  }

  backtrack(0, [])
  return res
};

// 并查集
class UnionFind {
  constructor (length) {
    this.father = Array.from({ length }, () => -1)
  }

  getRoot (x) {
    if (this.father[x] === -1) return x
    return this.father[x] = this.getRoot(this.father[x])
  }

  union (a, b) {
    const aa = this.getRoot(a)
    const bb = this.getRoot(b)
    this.father[aa] = bb
  }

  getBlocks () {
    const root2Block = new Map()
    for (let i = 0; i < this.father.length; ++i) {
      const r = this.getRoot(i)
      if (!root2Block.has(r)) root2Block.set(r, [])
      root2Block.get(r).push(i)
    }
    return Array.from(root2Block.values())
  }
}

module.exports = generateSentences