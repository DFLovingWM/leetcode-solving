/**
 * 二叉搜索树结点
 */
function TreeNode (key, value, left = null, right = null) {
  this.key = key
  this.value = value
  this.left = left
  this.right = right
}

// 插入结点
function insert (node, key, value) {
  if (!node) return new Node(key, value)

  if (key === node.key) {
    node.value = value
  } else if (key > node.key) {
    node.right = insert(node.right, key, value)
  } else {
    node.left = insert(node.left, key, value)
  }
  return node
}

// 寻找结点
function find (node, key) {
  if (!node) return null

  if (key === node.key) {
    return node.value
  } else if (key > node.key) {
    return find(node.right, key)
  } else {
    return find(node.left, key)
  }
}

// 寻找结点下界
function findLower (node, key) {

}

// 寻找结点上界
function findHigher (node, key) {

}
