/**
 * DFS
 * 时间：O(N)
 * 空间：O(H)，其中H为树高
 */
function hasPathSum(root, sum) {
  // 特殊情况：如果给定的树是空的
  if (!root) {
    return false;
  }

  // 递归函数：
  // 1. 入参：表示当前到达`node`结点，累计和为`acc`
  // 2. 返回值：表示是否存在
  function dfs(node, acc) {
    // 空结点：不考虑，返回上层
    if (!node) {
      return false;
    }

    // 走到该结点，累加
    acc += node.val;

    // 叶子结点，检测是否等于目标和
    if (!node.left && !node.right) {
      return acc === sum;
    }

    // 非叶子结点：继续往下走（递归）
    return dfs(node.left, acc) || dfs(node.right, acc);
  }

  // 一般情况：从根结点出发，此时的和从0开始算
  return dfs(root, 0);
}
