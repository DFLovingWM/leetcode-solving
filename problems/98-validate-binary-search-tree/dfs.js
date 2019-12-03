/**
 * DFS
 * 
 * 时间：`O(N)`, 84ms，使用缓存使得每个结点只求一次（像Top-down DP）
 */
var isValidBST = function (root) {
  if (!root) return true

  const bstSet = new Set()

  // 判断`node`子树是否是BST
  // 返回值：[min, max]
  function dfs (node) {
    if (!node) return [Infinity, -Infinity] // NULL结点

    let [leftMin, leftMax, leftBST] = [Infinity, -Infinity, true]
    if (node.left) {
      [leftMin, leftMax] = dfs(node.left)
      leftBST = bstSet.has(node.left)
    }

    let [rightMin, rightMax, rightBST] = [Infinity, -Infinity, true]
    if (node.right) {
      [rightMin, rightMax] = dfs(node.right)
      rightBST = bstSet.has(node.right)
    }

    if (leftBST && rightBST && leftMax < node.val && node.val < rightMin) { // 判断当前子树是否是BST
      bstSet.add(node)
    }
    return [Math.min(node.val, leftMin, rightMin), Math.max(node.val, leftMax, rightMax)]
  }

  dfs(root)
  return bstSet.has(root)
};