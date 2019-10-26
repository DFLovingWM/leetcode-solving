/**
 * Trie树结点类
 */
function TrieNode () {
  this.exist = false // 标记是否有单词以该字母为结尾
  this.next = new Map()
}

/**
 * 用HashMap代替26长数组可以更省空间
 * 
 * 时间：192ms
 * 空间：60.9MB
 */
var Trie = function () {
  this.root = new TrieNode()
};

// O(M)
Trie.prototype.insert = function (word) {
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

// O(M)
Trie.prototype.search = function (word) {
  let curr = this.root

  for (const ch of word) {
    if (!curr.next.has(ch)) return false
    curr = curr.next.get(ch)
  }

  return curr.exist
};

// O(M)
Trie.prototype.startsWith = function (prefix) {
  let curr = this.root

  for (const ch of prefix) {
    if (!curr.next.has(ch)) return false
    curr = curr.next.get(ch)
  }

  return true
};
