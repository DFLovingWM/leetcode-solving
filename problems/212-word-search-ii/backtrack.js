const DIRS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
]

/**
 * 二维数组回溯
 * 
 * 时间：6664ms，勉强AC
 * 空间：43.6MB
 */
var findWords = function(board, words) {
  const coordinates = new Map() // 字母 => 坐标列表
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[i].length; ++j) {
      const ch = board[i][j]
      if (!coordinates.has(ch)) {
        coordinates.set(ch, [])
      }
      coordinates.get(ch).push([i, j])
    }
  }

  return words.filter(word => exist(board, coordinates, word))
};

// 递归启动函数：
// 选定不同的起点开始探索
function exist (board, coordinates, word) {
  if (!coordinates.has(word[0])) return false
  for (const [sx, sy] of coordinates.get(word[0])) {
    if (backtrack(board, sx, sy, word, 1, new Set([getKey(sx, sy)]))) return true
  }
  return false
}

// 递归函数
function backtrack (board, x, y, word, i, visit) {
  if (i === word.length) return true

  for (const dir of DIRS) {
    const xx = x + dir[0]
    const yy = y + dir[1]

    if (xx < 0 || xx >= board.length || yy < 0 || yy >= board[0].length) continue
    if (board[xx][yy] !== word[i]) continue

    const key = getKey(xx, yy)
    if (visit.has(key)) continue

    visit.add(key)
    if (backtrack(board, xx, yy, word, i + 1, visit)) {
      return true
    }
    // 回溯
    visit.delete(key)
  }

  return false
}

// 坐标哈希
function getKey (x, y) {
  return `(${x},${y})`
}


[
  [
    [
      ['o','a','a','n'],
      ['e','t','a','e'],
      ['i','h','k','r'],
      ['i','f','l','v']
    ],
    ["oath","pea","eat","rain"]
  ],
  [
    [
      ["a","a"]
    ],
    ["aaa"]
  ],
  [
    [
      ["a","b","c"],
      ["a","e","d"],
      ["a","f","g"]
    ],
    ['eaabcdgfa']
  ]
].forEach(input => {
  console.log(findWords(...input))
})
