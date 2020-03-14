/**
 * 后序遍历（两次）
 */
var maxSumBST = function(root) {
  const node2Sum = new Map();

  // DFS，求子树和
  // 返回值：和
  function dfsSum(node) {
    if (!node) return 0;

    const sum = dfsSum(node.left) + dfsSum(node.right) + node.val;
    node2Sum.set(node, sum);
    return sum;
  }
  dfsSum(root);

  let res = 0;
  const node2Bst = new Map();

  // DFS，判断子树是否BST
  // 返回值：[min, max]
  function dfsBst(node) {
    if (!node) {
      node2Bst.set(node, true);
      return [Infinity, -Infinity];
    }

    const [lmin, lmax] = dfsBst(node.left);
    const [rmin, rmax] = dfsBst(node.right);
    if (node2Bst.get(node.left) && node2Bst.get(node.right) && lmax < node.val && rmin > node.val) { // BST的条件
      node2Bst.set(node, true);
      res = Math.max(res, node2Sum.get(node));
    } else {
      node2Bst.set(node, false);
    }
    const candidates = [lmin, lmax, rmin, rmax, node.val].filter(Number.isFinite); // 除去无用值
    return [Math.min(...candidates), Math.max(...candidates)];
  }
  dfsBst(root);

  return res;
};

/**
[1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]
[4,3,null,1,2]
[-4,-2,-5]
[2,1,3]
[5,4,8,3,null,6,3]
 */