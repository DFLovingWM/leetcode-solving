/**
 * - Time: O(N), 80ms
 * - Space: O(N), 34.9MB
 */
var insertIntoMaxTree = function(root, val) {
  return TreeUtil.deserialize(TreeUtil.serialize(root).concat(val))
};

class TreeUtil {
  static serialize (root) {
    let resultArray = []
    preOrder(root, resultArray)
    return resultArray
  }

  static deserialize (array) {
    return construct(array, 0, array.length)
  }
}

function preOrder (root, resultPath) {
  if (!root) return

  preOrder(root.left, resultPath)
  resultPath.push(root.val)
  preOrder(root.right, resultPath)
}

function construct (path, left, right) {
  if (right - left === 0) return null

  // Find max
  let maxIndex = -1, max
  for (let i = left; i < right; ++i) {
    if (maxIndex === -1 || path[i] > max) {
      maxIndex = i
      max = path[i]
    }
  }

  // Root
  let subRoot = new TreeNode(max)

  // Left and right, recursively
  subRoot.left = construct(path, left, maxIndex)
  subRoot.right = construct(path, maxIndex + 1, right)

  return subRoot
}
