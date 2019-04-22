// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

/**
 * Time: O(NlogN)
 */
var bstFromPreorder = function (preorder) {
  return helper(preorder, 0, preorder.length)
};

function helper(preorder, left, right) {
  if (right - left <= 0) { // Null node
    return null
  }

  let rootVal = preorder[left]
  let root = new TreeNode(rootVal)

  let i
  for (i = left + 1; i < right; ++i) {
    if (preorder[i] > rootVal) {
      break
    }
  }
  if (i !== -1) {
    root.left = helper(preorder, left + 1, i)
    root.right = helper(preorder, i, right)
  }

  return root
}

[
  [[8, 5, 1, 7, 10, 12]]
].forEach(input => {
  console.log(bstFromPreorder(...input))
})