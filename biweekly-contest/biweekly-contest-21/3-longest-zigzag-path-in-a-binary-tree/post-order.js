/**
 * 后序遍历（DP）
 */
var longestZigZag = function(root) {
  let res = 0;

  // 返回数组，表示该结点往左、右走的最长路径
  function helper(node) {
    if (!node) return [-1, -1];

    const [ll, lr] = helper(node.left);
    const [rl, rr] = helper(node.right);
    res = Math.max(res, 1 + lr, 1 + rl); // 记录答案
    return [1 + lr, 1 + rl];
  }

  helper(root);
  return res;
};