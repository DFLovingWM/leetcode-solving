/**
 * 双向BFS
 * 
 * 时间：O(NL), 80ms
 */
var ladderLength = function (beginWord, endWord, words) {
  const wordSet = new Set(words)
  if (!wordSet.has(endWord)) return 0 // 终点不在字典中，直接失败

  const queues = [new Queue(), new Queue()] // 两个队列
  const counts = [new Map(), new Map()] // 对应两个Map。不用Set是因为除了标记是否遍历过，还要记录步数

  queues[0].push(beginWord)
  counts[0].set(beginWord, 1)
  queues[1].push(endWord)
  counts[1].set(endWord, 1)

  let res
  while (!queues[0].empty() && !queues[1].empty()) { // 任意一个队列为空、却还没找到，就失败了
    // 往下找一层
    res = visitNode(queues[0], counts[0], queues[1], counts[1], wordSet)
    if (res) return res

    // 往上找一层
    res = visitNode(queues[1], counts[1], queues[0], counts[0], wordSet)
    if (res) return res
  }

  return 0
};

// 遍历结点（两个队列的共有逻辑，故抽取）
function visitNode (thisQueue, thisCount, thatQueue, thatCount, wordSet) {
  const word = thisQueue.popFront()

  for (const neighbor of getNeighbors(word)) {
    if (!wordSet.has(neighbor)) continue // 字典不存在这个单词，则忽略

    const newCount = thisCount.get(word) + 1

    // 另一个队列已经遍历过，即相交了，结束
    if (thatCount.has(neighbor)) {
      return newCount + thatCount.get(neighbor) - 1
    }

    // 该队列没有遍历过
    if (!thisCount.has(neighbor)) {
      thisCount.set(neighbor, newCount) // 标记遍历过，并记录步数
      thisQueue.push(neighbor)
    }
  }

  return 0
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