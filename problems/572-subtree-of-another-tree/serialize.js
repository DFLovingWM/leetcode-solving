/**
 * 化为字符串
 */
var isSubtree = function (s, t) {
  return tree2String(s).includes(tree2String(t))
};

// 前序遍历字符串
function tree2String (node) {
  if (!node) return '!null' // NULL也需要占有位置
  return `!${node.val}` + tree2String(node.left) + tree2String(node.right)
}