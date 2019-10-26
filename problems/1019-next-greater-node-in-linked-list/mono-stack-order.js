/**
 * 单调栈，顺序遍历
 * 时间：O(N), 180ms
 */
var nextLargerNodes = function(head) {
  const monoStack = new Stack()
  const answer = []

  for (let i = 0; head; head = head.next, ++i) {
    while (!monoStack.empty() && answer[monoStack.top()] < head.val) {
      answer[monoStack.pop()] = head.val
    }
    answer.push(head.val) // 初始值同链表（为的是能够随机访问链表中元素）
    monoStack.push(i) // 记录下标
  }

  // 将未更新的（没有比它大的），按题意设置为0
  while (!monoStack.empty()) {
    answer[monoStack.pop()] = 0
  }

  return answer
};

class Stack {
  constructor () {
    this.arr = []
  }

  empty () {
    return this.arr.length === 0
  }

  push (newElement) {
    this.arr.push(newElement)
  }

  pop () {
    return this.arr.pop()
  }

  top () {
    return this.arr[this.arr.length - 1]
  }
}
