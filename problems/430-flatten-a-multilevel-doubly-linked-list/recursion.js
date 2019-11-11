/**
 * 递归（类似于链表的后序遍历）
 */
function flatten (head) {
  let p = head

  while (p) {
    if (p.child) { // 如果有child，则递归
      let [child, next] = [p.child, p.next]

      // 递归
      flatten(child)

      // 处理线段头的连接处
      child.prev = p
      p.next = child
      p.child = null

      // 处理线段尾连接处
      while (child.next) child = child.next
      child.next = next
      if (next) next.prev = child

      p = next
    } else { // 没有则不处理
      p = p.next
    }
  }

  return head
};