/**
 * 递归（为了取尾元素）
 * 
 * 时间：`O(K % N)`
 */
var rotateRight = function(head, K) {
  if (!head) return head

  let len = 0
  for (let p = head; p; p = p.next) ++len
  K = K % len // 省略多个周期
  
  // 递归
  function dfs (node) {
    if (!node.next) {
      return node
    }
    
    const next = dfs(node.next)
    if (K === 0) return node

    node.next = next.next
    next.next = head
    head = next
    --K
    return node
  }
  
  dfs(head)
  return head
};