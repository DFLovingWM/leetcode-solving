/**
 * 用1个队列，pop需要O(N)
 * 时间：60ms
 */
var MyStack = function() {
  this.queue = new Queue() // 主要queue
  this._top = null // 记录最新的top
};

MyStack.prototype.push = function(x) {
  this.queue.push(x)
  this._top = x
};

// O(N)
MyStack.prototype.pop = function() {
  let anoQueue = new Queue()
  while (this.queue.size() > 1) {
    const tmp = this.queue.popFront()
    anoQueue.push(tmp)
    if (this.queue.size() === 1) {
      this._top = tmp
    }
  }
  const ret = this.queue.popFront();
  [anoQueue, this.queue] = [this.queue, anoQueue]
  return ret
};

MyStack.prototype.top = function() {
  return this._top
};

MyStack.prototype.empty = function() {
  return this.queue.empty()
};

// 队列
class Queue {
  constructor () {
    this.arr = []
  }

  empty () {
    return this.arr.length === 0
  }

  size () {
    return this.arr.length
  }

  push (newElement) {
    this.arr.push(newElement)
  }

  popFront () {
    return this.arr.shift()
  }

  front () {
    return this.arr[0]
  }
}