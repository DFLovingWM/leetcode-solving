/**
 * 纯递归
 */
function flatten (node) {
  if (!node) return null

  if (node.child) {
    const [child, next] = [node.child, node.next]
    flatten(child)
    // 删除child
    node.child = null
    // child代替next接在node后面
    node.next = child
    child.prev = node
    // next接在child后面
    let p = child
    while (p.next) p = p.next
    p.next = next
    if (next) next.prev = p
  }

  // 向前走，看下一个结点
  flatten(node.next)

  return node
};