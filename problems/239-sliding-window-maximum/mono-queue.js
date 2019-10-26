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

// 伪双端队列
class Deque {
  constructor () {
    this.arr = []
  }

  pushBack (x) {
    this.arr.push(x)
  }

  popBack () {
    return this.arr.pop()
  }

  back () {
    return this.arr[this.arr.length - 1]
  }

  // O(N)
  pushFront (x) {
    this.arr.unshift(x)
  }

  // O(N)
  popFront () {
    this.arr.shift()
  }

  front () {
    return this.arr[0]
  }

  empty () {
    return this.arr.length === 0
  }
}

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

module.exports = maxSlidingWindow