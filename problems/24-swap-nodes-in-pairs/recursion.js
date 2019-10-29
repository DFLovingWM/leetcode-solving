/**
 * 递归
 * 
 * 时间：O(N), 60ms
 * 空间：O(N)
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head // 空结点/尾结点，不必交换、直接返回
  
  const next = head.next
  const next2 = next.next
  next.next = head
  head.next = swapPairs(next2)
  return next
};

module.exports = swapPairs