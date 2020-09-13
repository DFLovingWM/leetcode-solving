/**
 * Morris遍历：与前序遍历相反，得到反路径
 * 右子树的最左结点.left = 左结点
 * 
 * 时间：72ms
 */
var postorderTraversal = function(root) {
  const res = []
  let curr = root

  while (curr) {
    res.push(curr.val)

    if (curr.right) { // 如果存在右结点
      let leftmost = curr.right
      while (leftmost.left) {
        leftmost = leftmost.left
      }
      leftmost.left = curr.left // 关键
      const next = curr.right
      curr.right = null
      curr = next
    } else { // 如果不存在右结点
      curr = curr.left
    }
  }

  return res.reverse()
};