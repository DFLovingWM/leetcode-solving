/**
 * DFS
 * 
 * 时间：`O(N)`, 80ms
 */
var largestBSTSubtree = function (root) {
  if (!root) return 0

  const bstSet = new Set()
  const node2Num = new Map()

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

  // 计算`node`子树的结点数
  function calNum (node) {
    if (!node) return 0

    const res = calNum(node.left) + calNum(node.right) + 1
    node2Num.set(node, res)
    return res
  }

  dfs(root)
  calNum(root)

  let res = 1
  for (const bst of bstSet) {
    const tmp = node2Num.get(bst)
    if (tmp > res) {
      res = tmp
    }
  }
  return res
};