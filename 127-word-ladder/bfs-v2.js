/**
 * BFS：单词即结点，单词间可变换即存在无向边，求最短路径
 * 求边：两两比较（稍慢）
 * 
 * 时间：O(N ^ 2 * L), 376ms
 */
var ladderLength = function (beginWord, endWord, words) {
  const n = words.length
  const nexts = Array.from({ length: n }, () => []) // 邻接表

  const end = words.indexOf(endWord) // 终点
  if (end === -1) return 0

  // 挖掘出所有边，时间为O(N ^ 2 * L)
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      if (isNeighbor(words[i], words[j])) {
        nexts[i].push(j)
        nexts[j].push(i)
      }
    }
  }

  const queue = new Queue()
  const visit = new Set()

  // 初始结点
  for (const [i, word] of words.entries()) {
    if (isNeighbor(beginWord, word)) {
      queue.push(new Step(i, 2))
    }
  }

  // 开始BFS
  while (!queue.empty()) {
    const { node: i, count } = queue.popFront()
    if (i === end) return count

    for (const j of nexts[i]) {
      if (!visit.has(j)) {
        visit.add(j)
        queue.push(new Step(j, count + 1))
      }
    }
  }

  return 0
};

function Step (node, count) {
  this.node = node
  this.count = count
}

function isNeighbor (wordA, wordB) {
  let diff = 0
  for (let i = 0; i < wordA.length; ++i) {
    if (wordA[i] !== wordB[i]) ++diff
    if (diff > 1) return false
  }
  return diff === 1
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