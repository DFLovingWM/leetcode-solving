/**
 * - Time: O(N2), 100ms
 * - Space: O(N), 41MB
 */
function constructMaximumBinaryTree (nums) {
  return helper(nums, 0, nums.length - 1)
}

function helper (nums, left, right) {
  if (right - left + 1 <= 0) return null

  let max, maxIndex = -1

  // Find the max, in O(N)
  for (let i = left; i <= right; ++i) {
    if (maxIndex === -1 || nums[i] > max) {
      max = nums[i]
      maxIndex = i
    }
  }

  let subroot = new TreeNode(max)
  subroot.left = helper(nums, left, maxIndex - 1)
  subroot.right = helper(nums, maxIndex + 1, right)

  return subroot
}