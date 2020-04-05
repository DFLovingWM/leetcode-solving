/**
 * 树形DP
 */
var rob = function(root) {
  return Math.max(...helper(root));
};

// 返回值为：[a, b]
// 表示对于node子树，不偷/偷node结点的最大价值
function helper(node) {
  if (!node) {
    return [0, 0];
  }
  
  const left = helper(node.left);
  const right = helper(node.right);

  const res = new Array(2);
  res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  res[1] = node.val + left[0] + right[0];
  return res;
}