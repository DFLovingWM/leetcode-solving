/**
 * 转化为遍历路径(二维数组。元素包括null)，然后在每一层的路径中对比
 * [80ms]
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric (root) {
  const levels = getDFSPath(root)
  // console.log(levels)
  return levels.every((level, index) => {
    if (index === 0) return true // Root level

    let L = 0, R = level.length - 1
    while (level[L] === level[R] && L < R) {
      ++L
      --R
    }
    return L > R
  })
}

function getDFSPath (root) {
  if (!root) return []
  let result = []
  dfs(root, 0, result)
  return result
}

function dfs (node, level, result) {
  if (!result[level]) result[level] = []
  if (!node) {
    result[level].push(null)
    return
  }
  result[level].push(node.val)
  dfs(node.left, level + 1, result)
  dfs(node.right, level + 1, result)
}

module.exports = isSymmetric