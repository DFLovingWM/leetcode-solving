function lowestCommonAncestor (root, p, q)  {
  let node = root

  while (node) {
    let pVal = p.val,
        qVal = q.val,
        nodeVal = node.val

    if (pVal > nodeVal && qVal > nodeVal) { // 都大于，往右走
      node = node.right
    } else if (pVal < nodeVal && qVal < nodeVal) { // 都小于，往左走
      node = node.left
    } else {
      /*
       * 到达这里的情况有：
       * (1)一个小于、一个大于，则需要分叉，所以node是LCA
       * (2)至少有一个与node相等，则node也是LCA(一个结点可以是自己的祖先/后代)
       */
      break
    }
  }

  return node
}

// module.exports = lowestCommonAncestor