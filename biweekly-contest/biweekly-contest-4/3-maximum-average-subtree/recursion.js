/**
 * 后序遍历
 * 
 * 时间：`O(N)`, 80ms
 */
var maximumAverageSubtree = function (root) {
  let maxAver = -Infinity

  // 返回值：[结点数，和]
  function dfs (node) {
    if (!node) return [0, 0]

    const [leftNum, leftSum] = dfs(node.left)
    const [rightNum, rightSum] = dfs(node.right)
    // 整合到该结点
    const [currNum, currSum] = [leftNum + rightNum + 1, leftSum + rightSum + node.val]
    // 计算该结点的平均值，并记录最大值
    maxAver = Math.max(maxAver, currSum / currNum)
    // 返回值
    return [currNum, currSum]
  }

  dfs(root)
  return maxAver
};