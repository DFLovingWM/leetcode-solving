/**
 * DP/后序遍历
 */
var rob = function(root) {
  // 状态定义：
  // 当前在结点`node`，返回选择`[偷, 不偷]`的最大收益
  function helper(node) {
    // 对于NULL结点，偷不了：
    // “偷”策略是不可能的，由于题目求最大收益，所以用 -Infinity 表示不可能
    // “不偷”自然就是 0 收益了
    if (!node) {
      return [-Infinity, 0];
    }

    // 后序遍历：先求子结点
    const left = helper(node.left);
    const right = helper(node.right);

    // 1. 如果选择偷node，那么left、right都不能偷
    const robNode = node.val + left[1] + right[1];
    // 2. 如果选择不偷node，那么left偷不偷都行，right也是偷不偷都行，选择最大收益的组合
    const noRobNode = Math.max(...left) + Math.max(...right);
    // `res`表示当前结点的答案
    const res = [robNode, noRobNode];
    return res;
  }

  const [robRoot, noRobRoot] = helper(root);
  return Math.max(robRoot, noRobRoot);
};

module.exports = rob;
