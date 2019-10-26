/**
 * Recursion.
 */
function sumOfLeftLeaves (root) {
  let sum = 0

  if (!root) return sum

  let left = root.left
  if (left) {
    if (!left.left && !left.right) { // If left child is a leaf, then add it.
      sum += left.val
    } else { // Or traverse it.
      sum += sumOfLeftLeaves(left)
    }
  }

  if (root.right) { // Traverse right child.
    sum += sumOfLeftLeaves(root.right)
  }

  return sum
}

module.exports = sumOfLeftLeaves

// const constructBinaryTree = require('../utils/construct-binary-tree/construct-binary-tree.js')

// let arr = [3,9,20,15,7]
// let root = constructBinaryTree(arr)
// let result = sumOfLeftLeaves(root)
// console.log('结果：', result)
