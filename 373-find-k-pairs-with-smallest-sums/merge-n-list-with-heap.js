/**
 * 合并N个有序链表。维护大小为N的小顶堆
 * 时间：O(KlogN)，耗时164ms
 */
var kSmallestPairs = function(nums1, nums2, K) {
  let reverse = false
  if (nums1.length < nums2.length) {
    // 优化：将nums2选为较短的那个，为了降低N
    [nums1, nums2] = [nums2, nums1]
    reverse = true
  }

  const N = nums2.length
  const index = Array.from({ length: N }, () => 0) // 记录N个链表的当前指针
  const pq = new PriorityQueue((a, b) => a.sum < b.sum) // 小顶堆

  // 将每个链表的头结点先放进队列
  for (let i = 0; i < N; ++i) {
    pq.add(new Node(nums1[0], nums2[i], i))
  }

  // yi ke sol~
  const res = []
  while (pq.size()) {
    const { i, j, listIndex } = pq.poll()
    res.push(reverse ? [j, i] : [i, j])
    if (res.length === K) break
    ++index[listIndex] // 该链表指针移动到下一个结点
    if (index[listIndex] < nums1.length) {
      pq.add(new Node(nums1[index[listIndex]], nums2[listIndex], listIndex))
    }
  }
  return res
};

module.exports = kSmallestPairs

function Node (i, j, listIndex) {
  this.i = i
  this.j = j
  this.sum = i + j
  this.listIndex = listIndex
}

// ===================== 堆实现 =====================

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
