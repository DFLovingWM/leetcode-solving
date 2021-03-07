/**
 * 双端队列（Double-ended queue）
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

module.exports = Deque
