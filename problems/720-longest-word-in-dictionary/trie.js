/**
 * Trie树
 * 
 * 时间：116ms
 * 空间：43.6MB
 */
var longestWord = function (words) {
  const trie = new Trie()
  for (const word of words) {
    trie.insert(word)
  }
  return trie.getLongestWord()
};

// ================== Trie树实现 ==================

class TrieNode {
  constructor () {
    this.exist = false
    this.nexts = new Map()
  }
}

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

    curr.exist = true
  }

  getLongestWord () {
    let result = ''

    // 递归函数
    function helper (curr, acc) {
      if (acc.length > result.length ||
        acc.length === result.length && acc < result) {
        result = acc // 更新答案
      }

      for (const letter of curr.nexts.keys()) {
        const next = curr.nexts.get(letter)
        if (next.exist) {
          // 如果加上下一个字母后还是一个单词，就可以继续探索
          helper(next, acc + letter)
        }
      }
    }

    helper(this.root, '')
    return result
  }
}

module.exports = longestWord