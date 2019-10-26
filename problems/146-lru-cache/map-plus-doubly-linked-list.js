/**
 * 双向链表结点
 */
function ListNode (key, value) {
  this.key = key
  this.value = value
  this.prev = null
  this.next = null
}

/**
 * Map + 双向链表
 * 时间：528ms
 * 空间：67.7MB
 */
var LRUCache = function(capacity) {
  this.capacity = capacity // 记录容量
  this.map = new Map() // key => 对应结点
  this.head = new ListNode() // 头dummy结点
  this.tail = new ListNode() // 尾dummy结点

  this.head.next = this.tail
  this.tail.prev = this.head
};

/** 
 * 如果存在
 *  将其“移动”到链表末尾
 */
LRUCache.prototype.get = function(key) {
  // 不存在，返回-1就结束
  if (!this.map.has(key)) {
    return -1
  }

  const node = this.map.get(key)
  deleteNode(node)
  insertNodeAfter(node, this.tail.prev)
  return node.value
};

/** 
 * if 存在：
 *  修改值并移动到最后
 * else：
 *  if 满了，则“删除”链表头结点
 *  追加到末端
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    const node = this.map.get(key)
    node.value = value
    deleteNode(node)
    insertNodeAfter(node, this.tail.prev)
  } else {
    if (this.map.size === this.capacity) {
      const toDelete = this.head.next
      deleteNode(toDelete)
      this.map.delete(toDelete.key)
    }
    const newNode = new ListNode(key, value)
    insertNodeAfter(newNode, this.tail.prev)
    this.map.set(key, newNode)
  }
};

function deleteNode (node) {
  let { prev, next } = node
  prev.next = next
  next.prev = prev
}

function insertNodeAfter (newNode, pivotNode) {
  let prev = pivotNode
  let next = pivotNode.next
  newNode.prev = prev
  newNode.next = next
  prev.next = newNode
  next.prev = newNode
}

/*
const cache = new LRUCache( 2 );
cache.put(2, 1);
cache.put(2, 2);
cache.get(2);       // 2
cache.put(1, 1);
cache.put(4, 1);
cache.get(2);       // -1
*/