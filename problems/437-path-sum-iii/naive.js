/**
 * 表示从`node`出发的和为`target`的路径数
 * @param {TreeNode} startNode 出发结点
 * @paran {number} target 目标和
 * @returns {number} 满足条件的路径数
 */
var pathSum = function (startNode, target) {
  if (!startNode) return 0

  return f(startNode, target) +
    pathSum(startNode.left, target) + pathSum(startNode.right, target) // 从左、右子结点出发（相当于对每个结点都调用`pathSum`这个方法，所以是naive法）
};

// 连续路径
function f (node, sum) {
  if (!node) return 0
  return (node.val === sum ? 1 : 0) + f(node.left, sum - node.val) + f(node.right, sum - node.val)
}