/**
 * DFS
 * 
 * 时间：`O(N)`, 283ms
 */
var longestUnivaluePath = function (root) {
  let res = 0

  function dfs (node) {
    if (!node) return 0
    
    const left = dfs(node.left)
    const right = dfs(node.right)

    // leftLen为走左边的最大长度、rightLen是右边
    let [leftLen, rightLen] = [1, 1]
    if (node.left && node.left.val === node.val) leftLen += left // 能连上左边
    if (node.right && node.right.val === node.val) rightLen += right // 能连上右边
    res = Math.max(res, leftLen + rightLen - 2)
    return Math.max(leftLen, rightLen)
  }

  dfs(root)
  return res
};

module.exports = longestUnivaluePath;