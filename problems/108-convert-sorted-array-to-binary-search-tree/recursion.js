/**
 * 算法技巧：每次取中点作为subroot，就能构造平衡的BST
 * [88ms]
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST (nums) {
  return createTree(nums, 0, nums.length)
}

function createTree (nums, left, right) {
  if (left >= right) return null

  let center = Math.floor((left + right) / 2),
      centerElement = nums[center] // Every time pick the center element as the root of subtree
  let node = new TreeNode(centerElement)

  node.left = createTree(nums, left, center)
  node.right = createTree(nums, center + 1, right)

  return node
}

module.exports = sortedArrayToBST