/**
 * 题目已经明说是前序遍历(= =
 * 
 * 时间：`O(N)`, 84ms
 */
var tree2str = function (node) {
  if (!node) return ''

  // 本结点
  let res = `${node.val}`

  // 左子
  if (node.left) {
    res += `(${tree2str(node.left)})`
  } else {
    if (node.right) { // 特殊：如果无左有右，则需要添加一对空括号
      res += `()`
    }
  }

  // 右子
  if (node.right) {
    res += `(${tree2str(node.right)})`
  }

  return res
};