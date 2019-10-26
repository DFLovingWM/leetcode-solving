/**
 * 分别获取到两个结点的路径(数组)，然后从后面开始找第一个相等的值
 * [84ms]
 * @param {TreeNode} root 根结点
 * @param {TreeNode} p 目标结点1
 * @param {TreeNode} q 目标结点2
 * @returns {TreeNode} 最近共同祖先结点(LCA)
 */
function lowestCommonAncestor (root, p, q)  {
  let path1 = getSearchPath(root, p)
  let path2 = getSearchPath(root, q)

  // console.log('path1: ', path1)
  // console.log('path2: ', path2)

  // 找LCA
  return findLastCommonElement(path1, path2)
}

function getSearchPath (root, targetNode) {
  let path = []
  let p = root

  while (true) {
    path.push(p)

    if (targetNode.val < p.val) {
      p = p.left
    } else if (targetNode.val > p.val) {
      p = p.right
    } else {
      break
    }
  }

  return path
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