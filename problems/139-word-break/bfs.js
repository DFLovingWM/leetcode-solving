/**
 * BFS
 * 
 * 时间：80ms
 */
var wordBreak = function (text, words) {
  const wordSet = new Set(words)

  const queue = new Queue()
  queue.push(0)
  const visit = new Set()
  visit.add(0)

  while (!queue.empty()) {
    const curr = queue.popFront()

    // 遍历所有下一个能到达的尾部
    for (let end = curr + 1; end <= text.length; ++end) {
      if (wordSet.has(text.slice(curr, end)) && !visit.has(end)) {
        if (end === text.length) return true

        queue.push(end)
        visit.add(end)
      }
    }
  }
  return false
};

class Queue {
  constructor (arr = []) {
    this.arr = arr
  }

  empty () {
    return this.arr.length === 0
  }

  push (x) {
    this.arr.push(x)
  }

  popFront () {
    return this.arr.shift()
  }
}

module.exports = wordBreak