/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * BFS [52ms] beating 100%
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean} Whether p is 'equal' to q
 */
function isSameTree (p, q) {
  return arrayEqual(getBFSPath(p), getBFSPath(q))
}

/**
 * 对一棵树进行BFS的路径
 * @param {TreeNode} 开始结点
 * @returns {Array} 表示路径的数组
 */
function getBFSPath (root) {
  let nodes = []
  let path = []

  nodes.push(root)
  while (nodes.length > 0) {
    let node = nodes.shift()

    if (!node) {
      path.push(null)
    } else {
      // 本结点
      path.push(node.val)
      // (向子结点)扩展
      nodes.push(node.left, node.right)
    }
  }

  return path
}

function arrayEqual (a, b) {
  return a.length === b.length && a.every((_, index) => a[index] === b[index])
}

module.exports = isSameTree