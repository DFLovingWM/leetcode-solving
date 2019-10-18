/**
 * BFS（层次遍历）：反向
 * 
 * 时间：O(NL), 644ms
 */
var findLadders = function (beginWord, endWord, words) {
  const wordSet = new Set(words)
  if (!wordSet.has(endWord)) return []

  let queue = []
  const visit = new Set()

  // 初始结点
  queue.push(new Step(endWord, []))
  visit.add(endWord)

  // 开始BFS
  const res = []

  while (queue.length) {
    const nextQueue = []
    const addVisit = new Set()

    for (const { word, path } of queue) { // 遍历这一层结点
      for (const neighbor of getNeighbors(word)) {
        // 相遇
        if (neighbor === beginWord) {
          res.push([...path, word, neighbor])
        }
        // 一般情况
        if (wordSet.has(neighbor) && !visit.has(neighbor)) {
          addVisit.add(neighbor)
          nextQueue.push(new Step(neighbor, [...path, word]))
        }
      }
    }

    if (res.length) break // 找到路径了，可以退出了（下一层就算有路径，也会更长）

    queue = nextQueue
    for (const i of addVisit) visit.add(i)
  }
  
  return res.map(path => path.reverse())
};

function Step (word, path) {
  this.word = word
  this.path = path
}

// 求word的邻居词
// 时间复杂度：O(26L) = O(L)
function getNeighbors (word) {
  const res = []

  for (let i = 0; i < word.length; ++i) { // 遍历每一个可替换的位置
    const a = 'a'.charCodeAt(0)
    const z = 'z'.charCodeAt(0)

    for (let code = a; code <= z; ++code) { // 遍历26个小写字母
      const ch = String.fromCharCode(code)
      if (word[i] !== ch) {
        const newWord = word.slice(0, i) + ch + word.slice(i + 1)
        res.push(newWord)
      }
    }
  }

  return res
}

module.exports = findLadders