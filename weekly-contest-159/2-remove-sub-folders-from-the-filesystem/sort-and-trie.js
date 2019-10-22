/**
 * Trie树
 * 
 * 时间：O(NlogN + NM)，M为文件夹平均层数, 288ms
 */
var removeSubfolders = function (folders) {
  folders.sort()

  const trie = new TrieNode()
  for (const folder of folders) {
    trie.insert(folder)
  }
  return trie.getAllPrefixes()
};

// Trie结点
function TrieNode () {
  this.exist = false
  this.nexts = new Map()
}

// 新增一个文件夹
TrieNode.prototype.insert = function (folder) {
  let curr = this
  for (const name of folder.slice(1).split('/')) {
    if (curr.exist) return // 遇到母文件夹，就可以停止了
    if (!curr.nexts.has(name)) {
      curr.nexts.set(name, new TrieNode())
    }
    curr = curr.nexts.get(name)
  }
  curr.exist = true
}

// 获取所有顶级文件夹
TrieNode.prototype.getAllPrefixes = function () {
  const res = []
  dfs(this, [], res)
  return res
}

function dfs (node, acc, res) {
  if (node.exist) {
    res.push('/' + acc.join('/'))
    return
  }
  for (const [edge, next] of node.nexts.entries()) {
    acc.push(edge)
    dfs(next, acc, res)
    acc.pop()
  }
}

module.exports = removeSubfolders