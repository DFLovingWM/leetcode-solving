/**
 * BFS + 优先级队列
 * 
 * 时间：最坏`O(NM * log(NM))`, 536ms
 */

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
]

var maximumMinimumPath = function (grid) {
  const [R, C] = [grid.length, grid[0].length]
  const queue = new PriorityQueue((A, B) => {
    const [ax, ay] = A
    const [bx, by] = B
    return grid[ax][ay] > grid[bx][by]
  }) // 最大堆：选最大的下一步
  const visit = Array.from({ length: R }, () => Array.from({ length: C }, () => false))
  
  queue.add([0, 0])
  visit[0][0] = true
  let res = grid[0][0]

  function isValid (x, y) {
    return x >= 0 && x < R && y >= 0 && y < C
  }

  while (queue.size() > 0) {
    const [x, y] = queue.poll()
    res = Math.min(res, grid[x][y])
    if (x === R - 1 && y === C - 1) return res

    for (const dir of DIRS) {
      const [nx, ny] = [x + dir[0], y + dir[1]]
      if (isValid(nx, ny) && !visit[nx][ny]) {
        queue.add([nx, ny])
        visit[nx][ny] = true
      }
    }
  }
};

module.exports = maximumMinimumPath

// ========================= 以下是优先级队列的实现 =============================

/**
 * 将数组转化为堆
 */
 function heapify (arr, comparator) {
  let heap = []
  for (const item of arr) {
    heapPush(heap, item, comparator)
  }
  return heap
}

/**
 * 将新元素插入堆，并维护堆的不变性
 */
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

/**
 * 弹出最小元素，并维护堆的不变性
 */
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