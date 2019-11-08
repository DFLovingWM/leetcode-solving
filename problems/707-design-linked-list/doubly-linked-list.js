/**
 * 任意位置插入/删除 => 双向链表
 */
function ListNode (val) {
  this.val = val
  this.prev = this.next = null
}

// O(1)
var MyLinkedList = function () {
  this.head = new ListNode()
  this.tail = new ListNode()
  this.len = 0

  this.head.next = this.tail
  this.tail.prev = this.head
};

MyLinkedList.prototype._getNode = function (index) {
  let p = this.head.next
  for (let i = 0; i < index; ++i) {
    p = p.next
  }
  return p
};

// O(N)
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.len) return -1
  return this._getNode(index).val
};

// O(1)
MyLinkedList.prototype.addAtHead = function (val) {
  insertNodeBefore(new ListNode(val), this.head.next)
  ++this.len
};

// O(1)
MyLinkedList.prototype.addAtTail = function (val) {
  insertNodeBefore(new ListNode(val), this.tail)
  ++this.len
};

// O(N)
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.len) return

  if (index === this.len) { // 末尾
    this.addAtTail(val)
  } else if (index <= 0) { // 头部
    this.addAtHead(val)
  } else {
    const pivot = this._getNode(index)
    insertNodeBefore(new ListNode(val), pivot)
  }

  ++this.len
};

// O(N)
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.len) return

  const target = this._getNode(index)
  deleteNode(target)
  --this.len
};

function insertNodeBefore (curr, next) {
  const prev = next.prev
  curr.next = next
  curr.prev = prev
  prev.next = curr
  next.prev = curr
}

function deleteNode (target) {
  const [prev, next] = [target.prev, target.next]
  prev.next = next
  next.prev = prev
}

module.exports = MyLinkedList