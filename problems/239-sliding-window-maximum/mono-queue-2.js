/**
 * 单调(递减)队列
 * 时间：O(N), 100ms
 */
var maxSlidingWindow = function(nums, k) {
  const queue = new MonotonicQueue()
  const res = []

  for (let i = 0; i < nums.length; ++i) {
    if (i < k - 1) {
      queue.push(nums[i])
    } else {
      queue.push(nums[i])
      queue.pop(nums[i - k])
      res.push(queue.max())
    }
  }

  return res
};

// 单调递减的双端队列
class MonotonicQueue {
  constructor () {
    this.deque = new Deque()
  }

  push (x) {
    while (!this.deque.empty() && this.deque.back() < x) { // 维护单调递减性
      this.deque.popBack()
    }
    this.deque.pushBack(x)
  }

  pop (x) {
    if (!this.deque.empty() && this.deque.front() === x) {
      this.deque.popFront()
    }
  }
  
  max () {
    return this.deque.front() // 头元素最大
  }
}

// ====================== 双端队列实现 ======================

// 双向链表结点
function Node (val) {
  this.val = val
  this.prev = null
  this.next = null
}

// 双向链表结点：插入之前
function insertBefore (newNode, pivotNode) {
  const prev = pivotNode.prev
  const next = pivotNode
  newNode.prev = prev
  newNode.next = next
  prev.next = newNode
  next.prev = newNode
}

// 双向链表结点：删除
function remove (node) {
  const prev = node.prev
  const next = node.next
  prev.next = next
  next.prev = prev
}


/**
 * 真 双端队列
 */
class Deque {
  constructor () {
    // 2个dummy结点
    this.head = new Node()
    this.tail = new Node()
    this.head.next = this.tail
    this.tail.prev = this.head
    // 当前容量
    this.capacity = 0
  }

  _checkEmpty () {
    if (this.capacity === 0) throw new Error('Deque is empty!')
  }

  front () {
    this._checkEmpty()
    return this.head.next.val
  }

  pushFront (x) {
    insertBefore(new Node(x), this.head.next)
    ++this.capacity
  }

  popFront () {
    this._checkEmpty()
    const toDelete = this.head.next
    remove(toDelete)
    --this.capacity
    return toDelete.val
  }

  back () {
    this._checkEmpty()
    return this.tail.prev.val
  }

  pushBack (x) {
    insertBefore(new Node(x), this.tail)
    ++this.capacity
  }

  popBack () {
    this._checkEmpty()
    const toDelete = this.tail.prev
    remove(toDelete)
    --this.capacity
    return toDelete.val
  }

  size () {
    return this.capacity
  }

  empty () {
    return this.size() === 0
  }
}

module.exports = maxSlidingWindow