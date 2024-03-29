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

// ========================= 以上是优先级队列的实现 =============================

function cmp(type, price, matchPrice) {
  if (type === 0) {
    return matchPrice <= price;
  }
  return matchPrice >= price;
}

/**
 * 堆模拟
 */
var getNumberOfBacklogOrders = function(orders) {
  const buy = new PriorityQueue((A, B) => A[0] > B[0]);
  const sell = new PriorityQueue((A, B) => A[0] < B[0]);
  const queues = [buy, sell];

  for (let [price, amount, type] of orders) {
    const curr = queues[type];
    const next = queues[1 - type];

    while (amount > 0 && !next.empty() && cmp(type, price, next.peek()[0])) {
      const count = Math.min(next.peek()[1], amount);
      // 本订单
      amount -= count;
      // 匹配订单
      const top = next.poll();
      top[1] -= count;
      if (top[1] > 0) {
        next.add(top);
      }
    }

    // 如果还有剩余，就加入备用
    if (amount > 0) {
      curr.add([price, amount]);
    }
  }

  let res = 0;
  const mod = 1e9 + 7;
  for (const queue of queues) {
    while (!queue.empty()) {
      const [, amount] = queue.poll();
      res += amount;
      res %= mod;
    }
  }
  return res;
};
