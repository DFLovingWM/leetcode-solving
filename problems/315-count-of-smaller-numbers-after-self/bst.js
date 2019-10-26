function TreeNode (val, sum) {
  this.val = val
  this.leftBottomCount = 0 // 左下方的结点数（新的更小的数量）
  this.dup = 1
  this.left = this.right = null
}

/**
 * 维护BST
 * 时间：O(NlogN)，最坏情况O(N^2)。耗时88ms
 */
var countSmaller = function(nums) {
  let length = nums.length
  let root = null
  const res = Array.from({ length }, () => 0)
  for (let i = length - 1; i >= 0; --i) {
    debugger
    root = insert(root, nums[i], i, res, 0)
  }
  return res
};

function insert (node, val, i, res, acc) {
  if (!node) {
    res[i] = acc
    return new TreeNode(val, acc)
  }
  
  if (val === node.val) { // 重复结点
    res[i] = acc + node.leftBottomCount // + 该结点左下方数
    ++node.dup
  } else if (val > node.val) { // 往右边走，累加
    node.right = insert(node.right, val, i, res, acc + node.dup + node.leftBottomCount) // + 该结点左下方数 + 该结点数
  } else { // 往左边走，更新
    ++node.leftBottomCount
    node.left = insert(node.left, val, i, res, acc) // + 0
  }
  return node
}

[
  [5,2,6,1],
  [-1, -1],
  [26,78,27,100,33,67,90,23,66,5,38,7,35,23,52,22,83,51,98,69,81,32,78,28,94,13,2,97,3,76,99,51,9,21,84,66,65,36,100,41],
].forEach(arr => {
  console.log(countSmaller(arr))
})
