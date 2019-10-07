/**
 * stack：存字符与次数
 * 
 * 时间：O(N), 64ms
 */
var removeDuplicates = function(s, K) {
  const stack = new Stack()
  
  for (let i = 0; i < s.length; ++i) {
    if (!stack.empty()) {
      const top = stack.top()
      if (top.ch === s[i]) {
        if (top.count + 1 === K) { // 连续相同达到K个，就删除
          stack.pop()
        } else { // 达不到就累加
          ++top.count
        }
        continue
      }
    }

    stack.push(new Node(s[i], 1))
  }
  
  const res = []
  while (!stack.empty()) {
    res.push(stack.pop().toString())
  }
  return res.reverse().join('')
};

function Node (ch, count) {
  this.ch = ch
  this.count = count
}

Node.prototype.toString = function () {
  return this.ch.repeat(this.count)
}

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

  empty () {
    return this.arr.length === 0
  }

  size () {
    return this.arr.length
  }

  top () {
    return this.arr[this.arr.length - 1]
  }
}

