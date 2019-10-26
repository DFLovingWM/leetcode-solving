/**
 * Trie树 + 最差堆
 * 
 * 时间：548ms
 * 空间：76.1MB
 */
var AutocompleteSystem = function (sentences, times) {
  this.root = new Trie()
  for (let i = 0; i < sentences.length; ++i) {
    this.root.insert(sentences[i], times[i])
  }
  this._input = '' // 当前输入
};

AutocompleteSystem.prototype.input = function (ch) {
  if (ch === '#') {
    this.root.insert(this._input, 1)
    this._input = ''
    return []
  }

  this._input += ch

  const queue = new PriorityQueue((nodeA, nodeB) => {
    if (nodeA.count !== nodeB.count) return nodeA.count < nodeB.count // （1）频次低的优先淘汰
    return nodeA.word > nodeB.word // （2）字典序大的优先淘汰
  })
  const candidates = this.root.getWords(this._input)
  for (const candidate of candidates) {
    queue.add(candidate)
    if (queue.size() > 3) {
      queue.poll()
    }
  }
  const res = []
  while (!queue.empty()) {
    res.push(queue.poll().word)
  }

  return res.reverse()
};

// 队列结点
function Node (word, count) {
  this.word = word
  this.count = count
}

// Trie结点
function TrieNode () {
  this.count = 0 // 频次
  this.nexts = new Map()
}

// Trie树
var Trie = function () {
  this.root = new TrieNode()
};

Trie.prototype.insert = function (word, count) {
  insert(word, 0, this.root, count)
};

function insert (word, i, currNode, count) {
  if (i === word.length) {
    currNode.count += count
    return
  }

  if (!currNode.nexts.has(word[i])) {
    currNode.nexts.set(word[i], new TrieNode())
  }

  insert(word, i + 1, currNode.nexts.get(word[i]), count)
}

// 获取以prefix为前缀的所有单词
Trie.prototype.getWords = function (prefix) {
  let curr = this.root

  for (const ch of prefix) {
    if (!curr.nexts.has(ch)) {
      return []
    }
    curr = curr.nexts.get(ch)
  }

  return getWords(curr, prefix)
}

function getWords (currNode, acc) {
  let ret = []

  // 本结点
  if (currNode.count > 0) {
    ret.push(new Node(acc, currNode.count))
  }

  // 子结点
  for (const letter of currNode.nexts.keys()) {
    ret = ret.concat(getWords(currNode.nexts.get(letter), acc + letter))
  }

  return ret
}

// =================== 堆实现 ===================

function heapify (arr, comparator) {
  let heap = []
  for (const item of arr) {
    heapPush(heap, item, comparator)
  }
  return heap
}

function heapPush (heap, item, comparator) {
  // 尾部加入
  heap.push(item)

  // 调整堆（新元素在尾部，所以是bottom-up）
  let cur = heap.length - 1
  while (cur > 0) { // 只要不是root（就有parent需要比较）
    let parent = Math.floor((cur - 1) / 2)
    if (comparator(heap[cur], heap[parent])) { // 满足上位条件
      swap(heap, parent, cur)
      cur = parent
    } else {
      break
    }
  }
}

function heapPop (heap, comparator) {
  // 头尾元素交换，为的是让最小元素从尾巴弹出
  swap(heap, 0, heap.length - 1)
  const result = heap.pop()

  // 调整堆（新元素在头部，所以是top-down）
  let cur = 0
  while (true) {
    let left = cur * 2 + 1
    let right = left + 1

    // 注：这个条件分支安排得非常完美！
    if (right < heap.length && comparator(heap[right], heap[cur]) && comparator(heap[right], heap[left])) { // 如果右子结点存在、并且满足上位条件
      swap(heap, right, cur)
      cur = right
    } else if (left < heap.length && comparator(heap[left], heap[cur])) { // (这个分支可以不考虑右子结点了)如果左子结点存在、并且满足上位条件
      swap(heap, left, cur)
      cur = left
    } else { // (这个分支可以不考虑右、左子结点了)
      break
    }
  }

  return result
}

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// 优先级队列
class PriorityQueue {
  constructor (comparator) {
    this.heap = []
    // 比较函数，默认为小顶堆
    this.comparator = comparator || function (a, b) {
      return a < b
    }
  }

  size () {
    return this.heap.length
  }

  empty () {
    return this.size() === 0
  }

  init (arr) {
    heapify(arr, this.comparator)
  }

  // 插入元素，并维护堆
  add (n) {
    heapPush(this.heap, n, this.comparator)
  }

  // 查看顶元素
  peek () {
    if (this.heap.length === 0) return NONE
    return this.heap[0]
  }

  // 推出顶元素，并维护堆
  poll () {
    if (this.heap.length === 0) return NONE
    return heapPop(this.heap, this.comparator)
  }
}



module.exports = AutocompleteSystem