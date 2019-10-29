/**
 * 循环法思路：
 * 维护一个逆序链表[head, tail]，每次将新节点插入前面。
 * 顺序处理。
 * 
 * - 时间：O(N)
 * - 空间：O(1)
 */
var reverseList = function (head) {
  let tail = head

  while (tail && tail.next) {
    // 从头部插入
    let newNode = tail.next
    tail.next = newNode.next
    newNode.next = head

    // 同时记录最新头部
    head = newNode
  }

  return head
};

module.exports = reverseList