/**
 * Trie树结点类
 */
function TrieNode () {
  this.exist = false // 标记是否有单词以该字母为结尾
  this.next = new Map()
}

/**
 * 递归版本
 * 
 * 时间：212ms
 * 空间：68.3MB
 */
var Trie = function () {
  this.root = new TrieNode()
};

// O(M)
Trie.prototype.insert = function (word) {
  insert(word, 0, this.root)
};

function insert (word, i, currNode) {
  if (i === word.length) {
    currNode.exist = true
    return
  }

  if (!currNode.next.has(word[i])) {
    currNode.next.set(word[i], new TrieNode())
  }
  insert(word, i + 1, currNode.next.get(word[i]))
}

// O(M)
Trie.prototype.search = function (word) {
  return search(word, 0, this.root)
};

function search (word, i, currNode) {
  if (!currNode) return false
  if (i === word.length) {
    return currNode.exist
  }
  return search(word, i + 1, currNode.next.get(word[i]))
}

// O(M)
Trie.prototype.startsWith = function (prefix) {
  return startsWith(prefix, 0, this.root)
};

function startsWith (prefix, i, currNode) {
  if (!currNode) return false
  if (i === prefix.length) {
    return true
  }
  return startsWith(prefix, i + 1, currNode.next.get(prefix[i]))
}
