function TrieNode () {
  this.exist = false // 标记是否有单词以该字母为结尾
  this.nexts = new Map()
}

/**
 * Trie树 + 穷举/回溯
 * 
 * 时间：60ms
 * 空间：34MB
 */
var MagicDictionary = function () {
  this.root = new TrieNode()
};

// O(NL)
MagicDictionary.prototype.buildDict = function (dict) {
  for (const word of dict) {
    insert(this.root, word, 0)
  }
};

/**
 * Trie树：插入单词
 * O(L)
 */
function insert (curr, word, i) {
  if (i === word.length) {
    curr.exist = true
    return
  }

  if (!curr.nexts.has(word[i])) {
    curr.nexts.set(word[i], new TrieNode())
  }
  insert(curr.nexts.get(word[i]), word, i + 1)
}

MagicDictionary.prototype.search = function (word) {
  count = 0
  return search(this.root, word, 0, 0)
};

function search (curr, word, i, count) {
  if (i === word.length) {
    return curr.exist && (count === 1)
  }

  if (count < 1) { // 小于1个，可以穷举
    for (const letter of curr.nexts.keys()) {
      const nextCount = (letter === word[i] ? 0 : 1) + count
      if (search(curr.nexts.get(letter), word, i + 1, nextCount)) return true
    }
    return false
  } else {
    if (!curr.nexts.has(word[i])) return false
    return search(curr.nexts.get(word[i]), word, i + 1, count)
  }
}

module.exports = MagicDictionary