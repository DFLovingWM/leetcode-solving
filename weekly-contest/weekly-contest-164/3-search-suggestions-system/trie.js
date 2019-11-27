/**
 * Trie树
 * 
 * 时间：`O()`, 164ms
 */
var suggestedProducts = function (products, searchWord) {
  const trie = new Trie()
  for (const product of products) {
    trie.insert(product)
  }

  let prefix = ''
  const results = Array.from({ length: searchWord.length }, () => [])

  for (let i = 0; i < searchWord.length; ++i) {
    prefix += searchWord[i]

    if (i > 0 && results[i - 1].every(result => result.startsWith(prefix))) { // 检查是否能重用上一个前缀的结果
      results[i] = results[i - 1].slice()
    } else { // 从Trie树中搜索
      results[i] = trie.query(prefix)
    }
  }

  return results
};

// Trie树结点
class TrieNode {
  constructor () {
    this.count = 0
    this.nexts = new Map()
  }
}

// Trie树
class Trie {
  constructor () {
    this.root = new TrieNode()
  }

  insert (word) {
    let curr = this.root
    for (const ch of word) {
      if (!curr.nexts.has(ch)) {
        curr.nexts.set(ch, new TrieNode())
      }
      curr = curr.nexts.get(ch)
    }
    ++curr.count
  }

  query (prefix) {
    const res = []
    let curr = this.root
    for (const ch of prefix) {
      if (!curr.nexts.has(ch)) return []
      curr = curr.nexts.get(ch)
    }
    // 开始搜索
    backtrack(curr, res, prefix)
    return res
  }
}

// 回溯
function backtrack (node, res, acc) {
  if (node.count > 0) {
    for (let i = 0; i < node.count; ++i) {
      res.push(acc)
      if (res.length >= 3) return true
    }
  }

  // 需要保证字典序，所以不能遍历Map的keys，要遍历a-z
  const a = 'a'.charCodeAt(0)
  const z = 'z'.charCodeAt(0)
  for (let code = a; code <= z; ++code) {
    const key = String.fromCharCode(code)
    if (!node.nexts.has(key)) continue

    const next = node.nexts.get(key)
    if (backtrack(next, res, acc + key)) return true
  }

  return false
}

module.exports = suggestedProducts