/**
 * BFS
 * 时间：O(N)
 * 空间：O(N)
 */
function hasPathSum(root, sum) {
  // 特殊情况：如果给定的树是空的
  if (!root) {
    return false;
  }

  // 队列：
  // 保存待遍历的状态
  // 每个状态表示为：[当前结点，当前和]
  const queue = [];
  // 从根结点出发
  queue.push([root, root.val]);
  // 开始BFS
  while (queue.length > 0) {
    const [node, acc] = queue.shift();

    // 叶子结点：检测
    if (!node.left && !node.right) {
      if (acc === sum) {
        return true;
      }
      continue;
    }

    // 非叶子：继续往下走
    if (node.left) {
      queue.push([node.left, acc + node.left.val]);
    }
    if (node.right) {
      queue.push([node.right, acc + node.right.val]);
    }
  }

  return false;
}
