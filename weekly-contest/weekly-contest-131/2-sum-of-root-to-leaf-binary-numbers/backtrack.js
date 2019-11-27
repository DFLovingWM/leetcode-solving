/**
 * 回溯
 */
const MOD = Math.pow(10, 9) + 7

var sumRootToLeaf = function (root) {
  let res = 0

  function backtrack (node, acc) {
    acc += node.val

    if (!node.left && !node.right) { // 叶子结点
      res = (res + Number.parseInt(acc, 2)) % MOD
      return
    }

    if (node.left) backtrack(node.left, acc)
    if (node.right) backtrack(node.right, acc)
  }

  backtrack(root, '')
  return res
};