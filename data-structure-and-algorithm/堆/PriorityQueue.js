const {
  heapify,
  heapPush,
  heapPop
} = require('./index')

const NONE = null

/**
 * Java的优先队列
 */
class PriorityQueue {
  constructor (arr = []) {
    this.heap = heapify(arr) // 堆（数组）
  }

  size () {
    return this.heap.length
  }

  // 插入元素，并维护堆
  add (n) {
    heapPush(this.heap, n)
  }

  // 查看顶元素
  peek () {
    if (this.heap.length === 0) return NONE
    return this.heap[0]
  }

  // 推出顶元素，并维护堆
  poll () {
    if (this.heap.length === 0) return NONE
    return heapPop(this.heap)
  }
}
