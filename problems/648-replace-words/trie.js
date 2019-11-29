/**
 * Trie树法
 * 
 * 时间：192ms
 * 空间：56.1MB
 */
var replaceWords = function(dict, sentence) {
  const trie = new Trie()
  for (const prefix of dict) {
    trie.insert(prefix)
  }

  const res = []
  for (const word of sentence.split(' ')) {
    res.push(trie.getPrefix(word))
  }
  return res.join(' ')
};

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

  /**
   * 插入一个前缀
   * @param {string} word 前缀（词根）
   * @returns {void}
   */
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

  /**
   * 获取单词的前缀。如果不存在，则返回单词本身
   * @param {string} word 单词
   * @returns {string} 前缀
   */
  getPrefix (word) {
    let curr = this.root
    let prefix = ''

    for (const ch of word) {
      if (!curr.nexts.has(ch)) return word
      prefix += ch
      curr = curr.nexts.get(ch)
      if (curr.exist) return prefix
    }

    return word
  }
}

module.exports = replaceWords