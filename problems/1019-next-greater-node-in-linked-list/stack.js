/**
 * Stack解法：O(N)
 */
var nextLargerNodes = function(head) {
  // 将链表转换为数组，以达到 O(1) 访问
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }

  let stack = new Stack()
  let result = Array.from({ length: arr.length }, () => 0) // 默认为0
  for (let i = 0; i < arr.length; ++i) {

    // 循环：如果top比cur要小，则记录top位置为cur
    while (!stack.empty() && arr[stack.top()] < arr[i]) {
      result[stack.pop()] = arr[i]
    }

    stack.push(i)
  }

  return result
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
