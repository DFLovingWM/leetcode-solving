/**
 * 
 */
var inorderSuccessor = function(root, target) {
  let res = null
  let node = root
  while (node) {
    if (target.val < node.val) {
      res = node
      node = node.left
    } else {
      node = node.right
    }
  }
  return res
};

/**
 *        5
 *      /  \
 *     3    6
 *    / \
 *   1   4
 * 
 */