/**
 * 递归（类似于链表的后序遍历）
 */
var flatten = function (head) {
  if (!head) return null
  return dfs(head)[0]
};

function dfs (head) {
  let [p, q] = [head, null]

  while (p) {
    if (p.child) {
      // 递归
      const [subHead, subTail] = dfs(p.child)
      const next = p.next

      // 删除子链表
      p.child = null
      // 连接子链表头部
      subHead.prev = p
      p.next = subHead
      // 连接子链表尾部
      subTail.next = next
      if (next) next.prev = subTail // 注：next可能是NULL
    }
    [p, q] = [p.next, p]
  }

  return [head, q]
}

function Node (val, prev, next, child) {
  this.val = val
  this.prev = prev
  this.next = next
  this.child = child
}

module.exports = flatten