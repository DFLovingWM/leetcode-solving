function lowestCommonAncestor (root, p, q)  {
  let lca = null
  
  function setAndGetWeight (node) {
    if (!node) return 0

    let weight = 0
    if (node.val === p.val || node.val === q.val) ++weight
    weight += setAndGetWeight(node.left) + setAndGetWeight(node.right)

    if (!lca && weight === 2) { // weight为2表示分叉点，也就是LCA
      lca = node
    }

    return node.weight = weight
  }

  setAndGetWeight(root)
  return lca
}

// module.exports = lowestCommonAncestor