/**
 * 递归（类似于中序遍历）
 */
var flatten = function (root) {
  if (!root) return
  
  flatten(root.left)
  // 将left切出来
  const left = root.left
  root.left = null
  // 将left拼到right头部，变为新right
  const right = root.right
  root.right = left
  // 新right走到尾部，再拼上旧right
  while (root.right) root = root.right
  root.right = right
  // 然后对旧right递归
  flatten(right)
};

module.exports = flatten