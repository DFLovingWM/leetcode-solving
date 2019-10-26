/**
 * 假递归：
 * 递归的手法，用的却是循环的思路
 */
var reverseList = function (head) {
  if (!head) return head // 特殊情况：空链表
  return helper(head, head)
};

function helper (head, tail) {
  if (tail.next) {
    let newNode = tail.next
    tail.next = newNode.next
    newNode.next = head
    return helper(newNode, tail)
  } else {
    return head
  }
}
