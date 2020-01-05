const TreeNode = require('./TreeNode');

/**
 * DFS（前序遍历）
 * @param {TreeNode} root 根结点
 * @returns {any[]} 路径
 */
module.exports = function bfs (root) {
  const path = [];

  const stack = [];
  stack.push(root);

  while (stack.length > 0) {
    const i = stack.pop(); // 取第一个
    path.push(i.val);
    // 先右
    if (i.right) stack.push(i.right);
    // 后左
    if (i.left) stack.push(i.left);
  }

  return path;
};