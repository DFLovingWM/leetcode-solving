/**
 * 使用1个栈，pop需要O(N)
 * 时间：64ms
 */
var MyQueue = function() {
  this.stack = new Stack()
  this.front = null
};

MyQueue.prototype.push = function(x) {
  this.stack.push(x)
  if (this.stack.size() === 1) {
    this.front = x
  }
};

// O(2N)=O(N)
MyQueue.prototype.pop = function() {
  const tmpStack = new Stack() // 临时stack
  while (this.stack.size() > 1) {
    const n = this.stack.pop()
    tmpStack.push(n)
    if (this.stack.size() === 1) {
      this.front = n
    }
  }
  const ret = this.stack.pop()
  while (!tmpStack.empty()) this.stack.push(tmpStack.pop())
  return ret
};

MyQueue.prototype.peek = function() {
  return this.front
};

MyQueue.prototype.empty = function() {
  return this.stack.empty()
};

// 栈
class Stack {
  constructor () {
    this.arr = []
  }

  push (x) {
    this.arr.push(x)
  }

  pop () {
    return this.arr.pop()
  }

  top () {
    return this.arr[this.arr.length - 1]
  }

  empty () {
    return this.arr.length === 0
  }

  size () {
    return this.arr.length
  }
}
