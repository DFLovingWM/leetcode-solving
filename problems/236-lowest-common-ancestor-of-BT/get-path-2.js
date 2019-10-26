/**
 * 与[get-path]一样的，这是有返回值的递归
 * 结果更耗时，需要[676ms]
 * @param {TreeNode} root 根结点
 * @param {TreeNode} p 目标结点1
 * @param {TreeNode} q 目标结点2
 * @returns {TreeNode} 最近共同祖先结点(LCA)
 */
function lowestCommonAncestor (root, p, q)  {
  let path1 = dfs(root, p),
      path2 = dfs(root, q)

  // console.log('path1: ', path1)
  // console.log('path2: ', path2)

  // 找LCA
  return findLastCommonElement(path1, path2)
}

function dfs (node, targetNode) {
  if (!node) {
    return []
  } else if (node.val === targetNode.val) {
    return [node]
  }

  // 左子树
  let leftPath = dfs(node.left, targetNode)
  if (leftPath.length && leftPath[leftPath.length - 1].val === targetNode.val) {
    return [node].concat(leftPath)
  }

  // 右子树
  let rightPath = dfs(node.right, targetNode)
  if (rightPath.length && rightPath[rightPath.length - 1].val === targetNode.val) {
    return [node].concat(rightPath)
  }

  return []
}

function findLastCommonElement (a, b) {
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = b.length - 1; j >= 0; --j) {
      if (b[j].val === a[i].val) {
        return b[j]
      }
    }
  }
  return null
}

// module.exports = lowestCommonAncestor