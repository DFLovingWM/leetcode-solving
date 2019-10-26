/**
 * Morris遍历：相邻兄弟结点之间增加边
 * 
 * 时间：684ms
 * 空间：81MB
 */
var preorder = function(root) {
  const res = []
  if (!root) return res

  let curr = root

  while (curr) {
    // 遍历该结点
    res.push(curr.val)
    
    const children = curr.children
    
    if (children.length >= 2) { // A存在2个以上子结点时，需要给它们之间增加边
      let left = null, right = null
      let next = null
      for (let i = 0; i < children.length - 1; ++i) {
        left = children[i]
        if (i === 0) {
          next = left
        }
        right = children[i + 1]
        while (left.children.length > 0) {
          left = left.children[left.children.length - 1] // 始终走最右
        }
        left.next = right // 增加`next`边
      }
      children.length = 0 // 删除与A的所有边
      curr = next
    } else if (children.length === 1) { // A只有一个子结点，就继续走
      curr = children[0]
    } else { // A没有子结点，就走`next`边
      curr = curr.next
    }
  }

  return res
};

module.exports = preorder