/**
 * 树形DP
 */
var rob = function(root) {
  // 因为跨层（`n-2`），所以有重复子问题，需要用缓存
  const memo = new Map();

  // 返回值：经历node子树的最大价值
  function helper(node) {
    if (!node) { // 空结点
      return 0;
    }
    if (memo.has(node)) { // 检查缓存
      return memo.get(node);
    }

    const left = node.left;
    const right = node.right;

    // 不偷
    const noRob = helper(left) + helper(right);
    // 偷
    const rob = node.val +
      (!left ? 0 : helper(left.left) + helper(left.right)) +
      (!right ? 0 : helper(right.left) + helper(right.right));
    const res = Math.max(noRob, rob);
    memo.set(node, res);
    return res;
  }

  return helper(root);
};