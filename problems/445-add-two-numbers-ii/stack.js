/**
 * 栈解法
 */
var addTwoNumbers = function (l1, l2) {
  const A = new Stack()
  for (let p = l1; p; p = p.next) A.push(p.val)
  const B = new Stack()
  for (let p = l2; p; p = p.next) B.push(p.val)

  let head = null
  let carry = 0

  while (!A.empty() || !B.empty()) {
    const a = A.empty() ? 0 : A.pop()
    const b = B.empty() ? 0 : B.pop()
    const tmp = carry + a + b
    carry = Math.floor(tmp / 10)
    // 向头部插入新结点
    head = addAtHead(head, tmp % 10)
  }
  if (carry) head = addAtHead(head, carry % 10)

  return head
};

// 链表结点
function ListNode (val) {
  this.val = val
  this.next = null
}

// 在链表头插入元素
function addAtHead (head, val) {
  const newNode = new ListNode(val)
  newNode.next = head
  return newNode
}

// 栈
class Stack {
  constructor () {
    this.arr = []
  }

  empty () {
    return this.arr.length === 0
  }

  push (x) {
    this.arr.push(x)
  }

  pop () {
    return this.arr.pop()
  }
}

module.exports = addTwoNumbers