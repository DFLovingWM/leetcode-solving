/**
 * 拓扑排序：字母即结点，每一对先后关系就是一条有向边
 */
var alienOrder = function(words) {
  const [letters, letter2Index] = makeNodes(words)
  const n = letters.length
  const edges = []
  getEdges(words, edges)
  
  const indeg = Array.from({ length: n }, () => 0) // 入度表
  const next = Array.from({ length: n }, () => []) // 邻接表
  for (let [a, b] of edges) {
    a = letter2Index.get(a) // 需要将字母变为下标，再处理
    b = letter2Index.get(b)
    ++indeg[b]
    next[a].push(b)
  }

  const queue = new Queue()
  let res = ''
  // 将入度为0的结点作为队列中的初始结点集
  for (let i = 0; i < n; ++i) {
    if (indeg[i] === 0) {
      queue.push(i)
    }
  }
  // 开始BFS
  while (!queue.empty()) {
    const i = queue.popFront()
    res += letters[i]

    for (const j of next[i]) {
      --indeg[j]
      if (indeg[j] === 0) {
        queue.push(j)
      }
    }
  }
  // 检查是否有环
  return res.length < n ? '' : res
};

// 字母映射为结点
function makeNodes (words) {
  let letters = new Set()
  for (const word of words) {
    for (const letter of word) {
      letters.add(letter)
    }
  }
  letters = Array.from(letters)

  const letter2Index = new Map()
  for (let i = 0; i < letters.length; ++i) {
    letter2Index.set(letters[i], i)
  }
  
  return [letters, letter2Index]
}

/**
 * 从给定的单词顺序中，找出所有有向边：
 * 每2个单词的顺序取决于第一个不相等的字母，它就是1对有向边
 */
function getEdges (words, res) {
  for (let i = 1; i < words.length; ++i) {
    const wordA = words[i - 1]
    const wordB = words[i]
    for (let j = 0; j < wordA.length && j < wordB.length; ++j) {
      if (wordA[j] !== wordB[j]) {
        res.push([wordA[j], wordB[j]])
        break
      }
    }
  }
}

// 队列
class Queue {
  constructor () {
    this.arr = []
  }

  push (x) {
    this.arr.push(x)
  }

  popFront () {
    return this.arr.shift()
  }

  empty () {
    return this.arr.length === 0
  }
}

[
  [
    "wrt",
    "wrf",
    "er",
    "ett",
    "rftt"
  ],
  [
    "z",
    "x"
  ],
  [
    "z",
    "x",
    "z"
  ],    
].forEach(words => {
  console.log(alienOrder(words))
})