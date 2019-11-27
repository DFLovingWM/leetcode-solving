/**
 * Trie树(后缀树)
 */

// O(NlogN + NL)
var StreamChecker = function (words) {
  this.trie = new Trie()
  this.input = ''

  words = words.map(reverseStr).sort()
  for (const word of words) {
    this.trie.insert(word)
  }
};

function reverseStr (str) {
  let res = ''
  for (let i = str.length - 1; i >= 0; --i) {
    res += str[i]
  }
  return res
}

// O(Q)
StreamChecker.prototype.query = function (letter) {
  this.input = letter + this.input
  return this.trie.query(this.input)
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

  insert (word) {
    let curr = this.root
    for (const ch of word) {
      if (curr.exist) return // 如果中途存在(更优的后缀)，可以提前退出

      if (!curr.nexts.has(ch)) {
        curr.nexts.set(ch, new TrieNode())
      }
      curr = curr.nexts.get(ch)
    }
    curr.exist = true
  }

  // 查看树中是否有keyword的前缀
  query (keyword) {
    let curr = this.root
    for (const ch of keyword) {
      if (!curr.nexts.has(ch)) return false
      curr = curr.nexts.get(ch)
      if (curr.exist) return true
    }
    return false
  }
}

module.exports = StreamChecker