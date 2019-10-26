/**
 * Trie树结点类
 */
function TrieNode () {
  this.exist = false // 标记是否有单词以该字母为结尾
  this.next = new Map()
}

/**
 * 使用Trie树
 * 
 * 时间：248ms
 * 空间：74.7MB
 */
var WordDictionary = function() {
  this.root = new TrieNode()
};

WordDictionary.prototype.addWord = function(word) {
  let curr = this.root

  for (const ch of word) {
    if (!curr.next.has(ch)) {
      const newNode = new TrieNode()
      curr.next.set(ch, newNode)
    }
    curr = curr.next.get(ch)
  }

  curr.exist = true
};

/**
 * 能搜索带'.'通配符的单词
 * (递归实现)
 */
WordDictionary.prototype.search = function(word) {
  return search(word, 0, this.root)
};

// O(26^M)
function search (word, i, currNode) {
  if (!currNode) return false
  if (i === word.length) return currNode.exist

  if (word[i] === '.') { // 通配符情况
    // 遍历26个小写字母
    for (let ch = 'a'; ch <= 'z'; ch = String.fromCharCode(ch.charCodeAt(0) + 1)) {
      if (search(word, i + 1, currNode.next.get(ch))) { // 只要有任意一个字母能否匹配成功，就返回true
        return true
      }
    }
    return false // 26个字母都不行，才返回false
  } else { // 一般字母情况
    return search(word, i + 1, currNode.next.get(word[i]))
  }
}

module.exports = WordDictionary