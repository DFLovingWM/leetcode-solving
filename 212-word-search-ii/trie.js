/**
 * Trie树 + 同时搜索多个字符串
 * 
 * 时间：132ms
 * 空间：56.1MB
 */
var findWords = function (board, words) {
  const root = new TrieNode()
  for (const word of words) {
    root.insert(word)
  }

  const res = []
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      // 这里需要传树的根结点`root`进去，因为需要更细粒度的操作
      backtrack(root, board, i, j, res, '')
    }
  }
  return res
};

const DIRS = [
  [0, 1],
  [-1, 0],
  [1, 0],
  [0, -1]
]

const EMPTY = ''

// 递归函数
// (x, y)表示准备走的这一步
function backtrack (node, board, x, y, res, acc) {
  if (node.exist) { // 找到一个单词
    res.push(acc)
    node.exist = false // 防止重复添加
  }

  if (!canWalk(board, x, y)) return // 位置不合法

  const ch = board[x][y]
  if (!node.nexts.has(ch)) return // 当前前缀在树中不存在

  board[x][y] = EMPTY // 走
  for (const dir of DIRS) {
    const xx = x + dir[0]
    const yy = y + dir[1]
    backtrack(node.nexts.get(ch), board, xx, yy, res, acc + ch) // 尝试走下一个位置
  }
  board[x][y] = ch // 回溯
}

function canWalk (board, x, y) {
  return x >= 0 && x < board.length && y >= 0 && y < board[0].length &&
    board[x][y] !== EMPTY
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
      if (!curr.nexts.has(ch)) curr.nexts.set(ch, new TrieNode())
      curr = curr.nexts.get(ch)
    }
    curr.exist = true
  }
}


[
  [
    [
      ['a', 'c', 't', 'i', 'o'],
      ['x', 'p', 'p', 'p', 'n']
    ],
    ['act', 'action']
  ],
  [
    [["a"]],
    ["a"]
  ]
].forEach(input => {
  console.log(findWords(...input))
})