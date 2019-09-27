/**
 * 二分
 * 时间：O(logN)，96ms
 */
var inorderSuccessor = function(root, target) {
  let prev = null
  let curr = root

  while (curr) {
    if (curr.val > target.val) { // curr比target大，那么curr是一个侯选值，然后走左边、以便可以找到更小的
      prev = curr
      curr = curr.left
    } else { // curr小于等于target，不能作为侯选值，然后走右边、以便找个更大一点的
      curr = curr.right
    }
  }

  return prev
};
