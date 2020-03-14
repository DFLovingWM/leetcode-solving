/**
 * 1次后序遍历
 * 
 * 时间：O(N), 296ms
 * 空间：O(H), 74.6MB
 */
var maxSumBST = function(root) {
  let res = 0; // 保存全局结果

  // 返回值为：[isBST, sum, min, max]
  // 即：[node是否BST，node子树和，node树的最小值，node树的最大值]
  function postOrder(node) {
    if (!node) {
      return new Node(true, 0);
    }

    const left = postOrder(node.left);
    const right = postOrder(node.right);

    const sum = left.sum + right.sum + node.val;
    const isBST = left.isBST && right.isBST && left.max < node.val && right.min > node.val;
    const min = Math.min(left.min, right.min, node.val);
    const max = Math.max(left.max, right.max, node.val);
    if (isBST) { // node是BST => 更新结果
      res = Math.max(res, sum);
    }
    return new Node(isBST, sum, min, max);
  }

  postOrder(root);
  return res;
};

// 返回值
function Node(isBST, sum, min = Infinity, max = -Infinity) {
  this.isBST = isBST;
  this.sum = sum;
  this.min = min;
  this.max = max;
}