/**
 * 递归
 * 参考：[官方题解](https://leetcode-cn.com/problems/split-bst/solution/chai-fen-er-cha-sou-suo-shu-by-leetcode/)
 * 
 * 时间：`O(H)`, 64ms
 */
var splitBST = function (node, V) {
  if (!node) return [null, null]

  if (node.val <= V) { // 右子树中可能有比V大的，所以要递归分割
    const [rl, rr] = splitBST(node.right, V)
    node.right = rl
    return [node, rr]
  } else { // 同理，左子树中可能有比V小的，所以要递归分割
    const [ll, lr] = splitBST(node.left, V)
    node.left = lr
    return [ll, node]
  }
};