/**
 * [68ms]
 */
var rob = function (root) {
  let [useRoot, noUseRoot] = dfs(root)
  return Math.max(useRoot, noUseRoot)
}

/**
 * 对某一个node进行DFS
 * @param {TreeNode} node 目标结点(sub root)
 * @returns {Number[]} 使用、不用本结点所达到的最大值
 */
function dfs (node) {
  if (!node) {
    return [0, 0]
  }

  let [useLeft, noUseLeft] = dfs(node.left),
      [useRight, noUseRight] = dfs(node.right)
  
  let useThis = node.val + noUseLeft + noUseRight // 使用本结点
  let noUseThis = Math.max(useLeft, noUseLeft) + Math.max(useRight, noUseRight) // 不使用本结点
  return [useThis, noUseThis]
}

// Good test case：[2, 1, 3, null, 4]

// module.exports = rob