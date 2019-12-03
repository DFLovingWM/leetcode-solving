/**
 * DFS
 */
var sufficientSubset = function (root, limit) {
  const maxSum = new Map()
  maxSum.set(null, 0)
  calcSum(root, maxSum)

  // 因为root也可能被删除，所以这里设一个dummy结点，作为root的父结点
  const dummy = new TreeNode()
  dummy.left = root

  function deleteInsufficient (node, acc) {
    if (node.left) {
      if (acc + maxSum.get(node.left) < limit) {
        node.left = null
      } else {
        deleteInsufficient(node.left, acc + node.left.val)
      }
    }
    if (node.right) {
      if (acc + maxSum.get(node.right) < limit) {
        node.right = null
      } else [
        deleteInsufficient(node.right, acc + node.right.val)
      ]
    }
  }

  deleteInsufficient(dummy, 0)
  return dummy.left
};

// 后序遍历：记录每个结点的最大子树和
function calcSum (node, maxSum) {
  if (!node.left && !node.right) { // 这里判断叶子结点，比判断NULL结点要好一些
    maxSum.set(node, node.val)
    return
  }

  let max = -Infinity
  if (node.left) {
    calcSum(node.left, maxSum)
    max = Math.max(max, maxSum.get(node.left))
  }
  if (node.right) {
    calcSum(node.right, maxSum)
    max = Math.max(max, maxSum.get(node.right))
  }
  maxSum.set(node, max + node.val)
}

function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

module.exports = sufficientSubset