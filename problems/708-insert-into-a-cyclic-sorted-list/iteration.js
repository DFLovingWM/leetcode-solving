/**
 * 至多循环3次
 * 
 * 时间：O(3N)=O(N)，924ms
 */
var insert = function (head, val) {
  if (!head) {
    head = new Node(val)
    head.next = head
    return head
  }

  let [prev, curr] = [head, head.next]
  let first = true

  // 1. 寻找大小介于两者之间的
  while (first || prev !== head) {
    first = false
    if (prev.val <= val && val <= curr.val) {
      const newNode = new Node(val)
      newNode.next = curr
      prev.next = newNode
      return head
    }
    [prev, curr] = [curr, curr.next]
  }

  // 2. 找不到、说明是最大或最小值，则找max => min，并插入
  first = true
  while (first || prev !== head) {
    first = false
    if (prev.val > curr.val) {
      const newNode = new Node(val)
      newNode.next = curr
      prev.next = newNode
      return head
    }
    [prev, curr] = [curr, curr.next]
  }
  
  // 3. 还是找不到、说明所有数字都相等，则直接插入
  const newNode = new Node(val)
  newNode.next = curr
  prev.next = newNode
  return head
};

module.exports = insert