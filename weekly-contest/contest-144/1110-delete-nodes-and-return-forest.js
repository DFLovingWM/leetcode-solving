/**
 * @param {TreeNode} root
 * @param {number[]} toDeletes
 * @return {TreeNode[]}
 */
var delNodes = function(root, toDeletes, forest = new Map()) {
  forest.set(root.val, root)

  for (const val of toDeletes) { // 遍历每个要删除的值
    let target
    for (const tree of forest.values()) { // 遍历每一棵树
      target = find(null, tree, val) // 找到该树上的对应结点
      if (target) break // 找到就可以了
    }

    if (!target) { // 不存在，就算了
      continue
    }

    let { parent, current } = target

    // 切断与父节点的连边
    if (parent) {
      if (parent.left === current) {
        parent.left = null
      } else {
        parent.right = null
      }
    }

    // 切断与子结点的联系，并将子树独立出来
    if (current.left) {
      forest.set(current.left.val, current.left)
    }
    if (current.right) {
      forest.set(current.right.val, current.right)
    }
    
    // 如果该结点是某棵树的根，则从森林中删除
    if (forest.has(current.val)) {
      forest.delete(current.val)
    }
  }

  return Array.from(forest.values())
}

// 在树中寻找结点（DFS）
// 返回目标结点与其父节点（以便斩断羁绊）
function find (parent, current, targetVal) {
  if (!current) return
  if (current.val === targetVal) {
    return { parent, current }
  }
  return find(current, current.left, targetVal) || find(current, current.right, targetVal)
}
