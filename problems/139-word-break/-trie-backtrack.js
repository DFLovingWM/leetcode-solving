/**
 * Trie + 回溯
 * 
 * 时间：TLE
 */
var wordBreak = function (text, wordDict) {
  const root = new TrieNode()
  for (const word of wordDict) {
    root.insert(word)
  }
  return backtrack(root, root, text, 0)
};

// 递归（回溯）单元
function backtrack (root, curr, text, i) {
  if (i === text.length && curr.exist) return true

  if (!curr.nexts.has(text[i])) return false

  curr = curr.nexts.get(text[i])
  if (curr.exist) {
    return backtrack(root, root, text, i + 1) || // 要么重新找
      backtrack(root, curr, text, i + 1) // 要么继续找
  } else {
    return backtrack(root, curr, text, i + 1)
  }
}

// Trie结点
class TrieNode {
  constructor () {
    this.exist = false
    this.nexts = new Map()
  }

  insert (word) {
    let curr = this
    for (const ch of word) {
      if (!curr.nexts.has(ch)) {
        curr.nexts.set(ch, new TrieNode())
      }
      curr = curr.nexts.get(ch)
    }
    curr.exist = true
  }
}

module.exports = wordBreak