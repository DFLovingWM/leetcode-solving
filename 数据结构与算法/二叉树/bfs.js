const TreeNode = require('./TreeNode');

/**
 * BFS
 * @param {TreeNode} root 根结点
 * @returns {any[]} 路径
 */
module.exports = function bfs (root) {
  const path = [];

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const i = queue.shift(); // 取第一个
    path.push(i.val);
    if (i.left) {
      queue.push(i.left);
    }
    if (i.right) {
      queue.push(i.right);
    }
  }

  return path;
};