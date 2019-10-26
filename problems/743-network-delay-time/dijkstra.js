/**
 * 单源最短路径中，最远的就是答案。
 * Dijkstra解法：
 * 
 * 时间：O(VlogV), 140ms
 */
var networkDelayTime = function (times, N, K) {
  const dist = dijkstra(N, times, K)

  let max = -Infinity
  for (let i = 1; i <= N; ++i) {
    max = Math.max(max, dist[i])
  }
  return max === Infinity ? -1 : max
};

// O(VlogV)
function dijkstra(n, edges, start) {
  const dist = Array.from({ length: n + 1 }, (_, i) => { // 源到各点的距离
    return i === start ? 0 : Infinity
  })
  const matrix = Array.from({ length: n + 1 }, (item1, i) => { // 邻接矩阵
    return Array.from({ length: n + 1 }, (item2, j) => {
      return i === j ? 0 : Infinity
    })
  })
  const next = Array.from({ length: n + 1 }, () => []) // 邻接表
  const isVisited = Array.from({ length: n + 1 }, () => false) // 某结点是否已遍历

  for (const [from, to, weight] of edges) {
    next[from].push(new Node(to, weight))
    matrix[from][to] = weight
  }
  isVisited[start] = true
  const pq = new PriorityQueue((a, b) => a.weight < b.weight) // 优先级队列：距离最近优先
  for (const node of next[start]) { // 队列先加入一开始可达的点
    pq.add(new Node(node.to, node.weight))
  }

  let rest = n - 1 // 最多循环(n-1)次
  while (!pq.empty()) {
    const { to: i, weight } = pq.poll()
    if (isVisited[i]) continue // 因为队列中有重复的元素，所以需要排除已遍历，直到拿出一个没有遍历过的

    isVisited[i] = true
    dist[i] = weight // 更新答案
    --rest

    // 松弛
    for (const nodeJ of next[i]) {
      if (!isVisited[nodeJ.to] && dist[i] + matrix[i][nodeJ.to] < dist[nodeJ.to]) {
        pq.add(new Node(nodeJ.to, dist[i] + matrix[i][nodeJ.to]))
      }
    }

    if (rest === 0) break
  }

  return dist
}

function Node(to, weight) {
  this.to = to
  this.weight = weight
}

// ========================= 以下是优先级队列的实现 =============================

/**
 * 将数组转化为堆
 */
function heapify(arr, comparator) {
  let heap = []
  for (const item of arr) {
    heapPush(heap, item, comparator)
  }
  return heap
}

/**
 * 将新元素插入堆，并维护堆的不变性
 */
function heapPush(heap, item, comparator) {
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

/**
 * 弹出最小元素，并维护堆的不变性
 */
function heapPop(heap, comparator) {
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

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// 优先级队列
class PriorityQueue {
  constructor(comparator) {
    this.heap = []
    // 比较函数，默认为小顶堆
    this.comparator = comparator || function (a, b) {
      return a < b
    }
  }

  size() {
    return this.heap.length
  }

  empty() {
    return this.size() === 0
  }

  init(arr) {
    heapify(arr, this.comparator)
  }

  // 插入元素，并维护堆
  add(n) {
    heapPush(this.heap, n, this.comparator)
  }

  // 查看顶元素
  peek() {
    if (this.heap.length === 0) return NONE
    return this.heap[0]
  }

  // 推出顶元素，并维护堆
  poll() {
    if (this.heap.length === 0) return NONE
    return heapPop(this.heap, this.comparator)
  }
}

[
  [[[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2],
].forEach(input => {
  console.log(networkDelayTime(...input))
})