/**
 * 循环法
 */
var reverseKGroup = function(root, K) {
  let len = 0
  for (let p = root; p; p = p.next) ++len
  const round = Math.floor(len / K)
  
  let res = root
  let prevHead = null
  let prevTail = new ListNode()
  prevTail.next = root
  
  for (let i = 0; i < round; ++i) {
    // 初始化首结点
    let [head, tail] = [prevTail.next, prevTail.next]
    
    // 迭代
    for (let j = 1; j < K; ++j) {
      const newNode = tail.next
      tail.next = newNode.next
      newNode.next = head
      head = newNode
    }
    
    // 跟上K个连接
    prevTail.next = head
    if (i === 0) {
      res = head
    }
    
    [prevHead, prevTail] = [head, tail]
  }
  
  return res
};

module.exports = reverseKGroup