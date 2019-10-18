/**
 * BFS：单词即结点，单词间可变换即存在无向边，求最短路径
 * 求边方式：遍历所有邻居词（更快）
 * 
 * 时间：O(NL), 228ms
 */
var ladderLength = function (beginWord, endWord, words) {
  if (!words.includes(endWord)) return 0 // 终点不在字典中，直接失败

  const wordSet = new Set(words)

  const queue = new Queue()
  const visit = new Set()

  // 初始结点
  queue.push(new Step(beginWord, 1))

  // 开始BFS
  while (!queue.empty()) {
    const { word, count } = queue.popFront()
    if (word === endWord) return count

    // 寻找下一个结点
    for (const neighbor of getNeighbors(word, wordSet)) {
      if (!visit.has(neighbor)) {
        visit.add(neighbor)
        queue.push(new Step(neighbor, count + 1))
      }
    }
  }

  return 0
};

function Step (word, count) {
  this.word = word
  this.count = count
}

// 求word在wordSet中的邻居词
// 时间复杂度：O(26L) = O(L)
function getNeighbors (word, wordSet) {
  const res = []

  for (let i = 0; i < word.length; ++i) { // 遍历每一个可替换的位置
    const a = 'a'.charCodeAt(0)
    const z = 'z'.charCodeAt(0)

    for (let code = a; code <= z; ++code) { // 遍历26个小写字母
      const ch = String.fromCharCode(code)
      if (word[i] !== ch) {
        const newWord = word.slice(0, i) + ch + word.slice(i + 1)
        if (wordSet.has(newWord)) {
          res.push(newWord)
        }
      }
    }
  }

  return res
}

// 队列
class Queue {
  constructor (arr = []) {
    this.arr = arr
  }

  empty () {
    return this.arr.length === 0
  }

  size () {
    return this.arr.length
  }

  push (x) {
    this.arr.push(x)
  }

  popFront () {
    return this.arr.shift()
  }
}

module.exports = ladderLength